import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import './service';

const ENQUIRIES_STORAGE_KEY = 'camper-enquiries';

export const submitCamperEnquiry = createAsyncThunk(
  'enquiry/submit',
  async ({ camperId, camperName, name, email, bookingDate, comment }, thunkAPI) => {
    const envelope = {
      camperId,
      camperName,
      name,
      email,
      bookingDate,
      comment: comment || '',
      submittedAt: new Date().toISOString(),
    };
    try {
      await axios.post('/contacts', envelope);
      return { source: 'remote' };
    } catch {
      try {
        const prev = JSON.parse(
          localStorage.getItem(ENQUIRIES_STORAGE_KEY) || '[]'
        );
        prev.push(envelope);
        localStorage.setItem(
          ENQUIRIES_STORAGE_KEY,
          JSON.stringify(prev)
        );
        return { source: 'local' };
      } catch {
        return thunkAPI.rejectWithValue(
          'Could not save your enquiry. Please try again.'
        );
      }
    }
  }
);

const enquirySlice = createSlice({
  name: 'enquiry',
  initialState: {
    submitStatus: 'idle',
    submitError: null,
    lastSource: null,
  },
  reducers: {
    resetEnquirySubmit: state => {
      state.submitStatus = 'idle';
      state.submitError = null;
      state.lastSource = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(submitCamperEnquiry.pending, state => {
        state.submitStatus = 'loading';
        state.submitError = null;
      })
      .addCase(submitCamperEnquiry.fulfilled, (state, action) => {
        state.submitStatus = 'succeeded';
        state.lastSource = action.payload.source;
      })
      .addCase(submitCamperEnquiry.rejected, (state, action) => {
        state.submitStatus = 'failed';
        state.submitError =
          action.payload ||
          action.error.message ||
          'Something went wrong.';
      });
  },
});

export const { resetEnquirySubmit } = enquirySlice.actions;
export const enquiryReducer = enquirySlice.reducer;
