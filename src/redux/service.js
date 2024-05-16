import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://664072d9a7500fcf1a9dcbbe.mockapi.io';

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
