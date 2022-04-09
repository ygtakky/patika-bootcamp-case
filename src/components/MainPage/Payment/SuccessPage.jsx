import { Card, Col, Row, Typography } from 'antd'
import { CheckCircleOutlined } from '@ant-design/icons'
import React from 'react'

const SuccessPage = () => {
  return (
    <div className='app__container'>
    <Card className='app__container__card app__container__card-payment_success'>
      <Row justify='space-evenly' >
      <Col span={24} style={{fontSize: 150}}>
      <CheckCircleOutlined style={{width: "100%",color: "green"}} />
      </Col>
      <Col style={{display:"flex", justifyContent: "center"}} span={24}>
        <Typography.Title level={1}>Başarıyla Tamamlandı!</Typography.Title>
      </Col>
      </Row>
    </Card>
    </div>
  )
}

export default SuccessPage