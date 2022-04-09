import { Card, Typography } from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const PaymentContract = () => {
  const contract = useSelector((state) => state.payment.contract);

  useEffect(() => {
    if (contract !== undefined) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(contract, "text/html");
      document.getElementById("contract").innerHTML = doc.body.outerHTML;
    }
  }, [contract]);

  return (
    <>
      <Typography.Title level={5}>Sözleşme</Typography.Title>
      <Card
        id="contract"
        className="border-rounded"
        style={{ fontSize: 14, fontWeight: 500, padding: 24 }}
      ></Card>
    </>
  );
};

export default PaymentContract;
