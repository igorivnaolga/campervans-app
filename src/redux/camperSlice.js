import { fetchCampervans } from './service';

import { createSlice } from '@reduxjs/toolkit';

const camperSlice = createSlice({
  name: 'campervans',
  initialState: {
    items: [],
    visibleCampers: 4,
    isLoading: false,
    error: null,
  },

  reducers: {
    loadMoreCampers(state) {
      state.visibleCampers += 4;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCampervans.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCampervans.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchCampervans.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const camperReducer = camperSlice.reducer;
export const { loadMoreCampers } = camperSlice.actions;
