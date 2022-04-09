import { Card } from "antd";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getContract } from "../../../redux/paymentSlice";
import PaymentContract from "./PaymentContract";
import PaymentForm from "./PaymentForm";

const bodyStyle = {
  display: "flex",
  flexDirection: "column",
  maxHeight: "100%",
  overflowY: "auto",
};

const PaymentMain = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContract())
  }, [dispatch])

  return (
    <Card className="content__container border-rounded" bodyStyle={bodyStyle}>
      <div className="payment__container">
        <PaymentForm />
      </div>
      <div className="payment__container">
        <PaymentContract/>
      </div>
    </Card>
  );
};

export default PaymentMain;
