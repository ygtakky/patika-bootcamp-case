import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import packagesReducer from "./packagesSlice";

// Create a store with redux toolkit
const store = configureStore({
  reducer: {
    user: userReducer,
    packages: packagesReducer,
  },
}
);

export default store;
