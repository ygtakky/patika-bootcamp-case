import { Col, Row } from 'antd'
import React from 'react'
import PaymentMain from './PaymentMain'
import PaymentSide from './PaymentSide'

const PaymentPage = () => {

  return (
    <Row gutter={24} className="payment__page">
      <Col span={16} className="payment__page__col">
        <PaymentMain/>
      </Col>
      <Col span={8} className="payment__page__col">
        <PaymentSide/>
      </Col>
    </Row>
  )
}

export default PaymentPage