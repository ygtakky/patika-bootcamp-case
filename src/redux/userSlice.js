import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPackages } from './packagesSlice';
import { axiosInstance } from './service';

export const signupUser = createAsyncThunk(
  'user/signup',
  async (payload, thunkAPI) => {
    try {
      const response = await axiosInstance.post('/signup', payload);
      thunkAPI.dispatch(getPackages());
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    isLoggedIn: false,
    error: {}
  },
  reducers: {},
  extraReducers: {
    [signupUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    [signupUser.rejected]: (state, action) => {
      state.error = action.payload;
    }
  }
});

export default userSlice.reducer;