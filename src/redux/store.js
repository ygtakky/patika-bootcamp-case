import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import packagesReducer from "./packagesSlice";
import paymentReducer from "./paymentSlice";

// Create a store with redux toolkit
const store = configureStore({
  reducer: {
    user: userReducer,
    packages: packagesReducer,
    payment: paymentReducer,
  },
}
);

export default store;
