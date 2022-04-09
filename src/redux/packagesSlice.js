import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "./service";

export const getPackages = createAsyncThunk(
  "packages/getPackages",
  async (payload, thunkAPI) => {
    try {
      const response = await axiosInstance.get("/packages");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const packagesSlice = createSlice({
  name: "packages",
  initialState: {
    packages: [],
    error: {},
    isLoading: false,
  },
  reducers: {},
  extraReducers: {
    [getPackages.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getPackages.fulfilled]: (state, action) => {
      state.packages = action.payload
      state.isLoading = false;
  },
    [getPackages.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    }
  }
});

export default packagesSlice.reducer;
