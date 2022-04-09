import { Card, Col, Layout, Row } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import React from 'react'

const PaymentPage = () => {
  return (
    <Row gutter={24}>
      <Col span={16}>
        <Card className='content__container'>
          Payment page
        </Card>
      </Col>
      <Col span={8}>
        <Card className='content__container'>
          Sidebar
        </Card>
      </Col>
    </Row>
  )
}

export default PaymentPage