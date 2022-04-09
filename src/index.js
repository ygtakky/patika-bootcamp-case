import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import SignupForm from "./components/Auth/SignupForm";
import PaymentPage from "./components/MainPage/Payment/PaymentPage";
import SuccessPage from "./components/MainPage/Payment/SuccessPage";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/home" element={<MainPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/payment/success" element={<SuccessPage />} />
          <Route path="/signup" element={<SignupForm />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
