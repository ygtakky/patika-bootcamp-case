import { Button, Col, Divider, Row } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetPackages } from "../../redux/packagesSlice";
import PackageCard from "./PackageCard";

const MainPage = () => {
  const packages = useSelector((state) => state.packages.packages);
  const currentPrice = useSelector((state) => state.packages.currentPrice);
  const currency = useSelector((state) => state.packages.currency);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(resetPackages())
  }, [dispatch])

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
        <Button size="large" className="border-rounded" block type="primary" onClick={handleContinue}>Devam Et</Button>
      </Col>
    </Row>
    </div>
  );
};

export default MainPage;
