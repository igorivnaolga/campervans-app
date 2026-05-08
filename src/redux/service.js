import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const API_BASE_URL =
  process.env.REACT_APP_MOCK_API_URL ||
  'https://664072d9a7500fcf1a9dcbbe.mockapi.io';

axios.defaults.baseURL = API_BASE_URL;

export const fetchCampervans = createAsyncThunk(
  'campervans/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/campervans');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
