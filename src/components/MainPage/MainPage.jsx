import { Button, Col, Divider, Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PackageCard from "./PackageCard";

const MainPage = () => {
  const packages = useSelector((state) => state.packages.packages);
  const currentPrice = useSelector((state) => state.packages.currentPrice);
  const currency = useSelector((state) => state.packages.currency);

  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/payment");
  }

  return (
    <div className="content__container app__content-logged-in">
    <Row className="content__grid" style={{rowGap: 34, overflowY: "auto"}} gutter={36}>
      {packages.map((data, index) => (
        <Col key={data.id} span={24} xl={12}>
          <PackageCard data={data} />
        </Col>
      ))}
    </Row>
    <Divider style={{marginTop: 10, marginBottom: 10}}/>
    <Row className="content__grid">
      <Col span={16} style={{fontSize: 20}}>
          Seçilen Paket Tutarı : <strong>{currentPrice} {currency}</strong>
      </Col>
      <Col span={8}>
        <Button size="large" style={{height: "100%", width: "100%", borderRadius: 8}} type="primary" onClick={handleContinue}>Devam Et</Button>
      </Col>
    </Row>
    </div>
  );
};

export default MainPage;
