import { Button, Card, Col, Divider, Row, Typography } from "antd";
import {useSelector} from 'react-redux'
import React from "react";

const cardStyle = {
  borderRadius: 8,
  marginBottom: 8,
  backgroundColor: '#f8f8f8',
}

const bodyStyle = {
  padding: "0.6rem",
}

const PaymentSide = () => {
  const selectedPackages = useSelector(state=>state.packages.selectedPackages)
  const currentPrice = useSelector(state=>state.packages.currentPrice)
  const currency = useSelector(state=>state.packages.currency)

  return <Card className="content__container">
    <Typography.Title level={5}>Sepetteki Paketler</Typography.Title>
    <div className="content__overflow">
    {selectedPackages.map((item) => (
      <Card key={item.id} style={cardStyle} bodyStyle={bodyStyle} >
        <Row>
        <Col flex="auto">
        {item.name}
        </Col>
        <Col flex>
        <strong>{item.amount} {item.currency}</strong>
        </Col>
        </Row>
      </Card>
    ))}
    </div>
    <Divider style={{margin: "12px 0"}} />
    <Row justify="space-between" style={{margin: 0, padding: "0.6rem"}}>
    <Col>
    <Typography.Title level={5}>Toplam Tutar</Typography.Title>
    </Col>
    <Col>
    <Typography.Text strong>{currentPrice} {currency}</Typography.Text>
    </Col>
    </Row>
    <Button form="paymentForm" className="border-rounded" block size="large" type="primary" htmlType="submit"style={{marginTop: 8}} >Ödeme Yap</Button>
  </Card>;
};

export default PaymentSide;
