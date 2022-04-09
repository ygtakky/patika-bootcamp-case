import { Card } from "antd";
import React from "react";
import PaymentContract from "./PaymentContract";
import PaymentForm from "./PaymentForm";

const bodyStyle = {
  display: "flex",
  flexDirection: "column",
  maxHeight: "100%",
  overflowY: "auto",
};

const PaymentMain = () => {
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
