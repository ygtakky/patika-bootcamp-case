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
    selectedPackages: [],
    currentPrice: 0,
    currency: "",
    error: {},
    isLoading: false,
  },
  reducers: {
    addPackage: (state, action) => {
      state.selectedPackages = [...state.selectedPackages, action.payload];
      state.currentPrice += action.payload.amount;
    },
    removePackage: (state, action) => {
      const index = state.selectedPackages.findIndex(
        (p) => p.id === action.payload.id
      );
      state.selectedPackages.splice(index, 1);
      state.currentPrice -= action.payload.amount;
    },
    resetPackages: (state) => {
      state.selectedPackages = [];
      state.currentPrice = 0;
    }
  },
  extraReducers: {
    [getPackages.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getPackages.fulfilled]: (state, action) => {
      state.packages = action.payload;
      state.isLoading = false;
      if (state.packages) {
        state.currency = state.packages[0].currency;
      }
    },
    [getPackages.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { addPackage, removePackage, resetPackages } = packagesSlice.actions;

export default packagesSlice.reducer;
