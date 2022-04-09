import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "./service";

export const sendPayment = createAsyncThunk(
  "payment/sendPayment",
  async (data, thunkAPI) => {
    try {
      const response = await axiosInstance.post("/payment", data);
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    success: false,
  },
  reducers: {},
  extraReducers: {
    [sendPayment.fulfilled]: (state, action) => {
      state.success = true;
    },
    [sendPayment.rejected]: (state, action) => {
      state.success = false;
    },
  }
});

export default paymentSlice.reducer;
