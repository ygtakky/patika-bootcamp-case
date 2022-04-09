import { Card, Col, DatePicker, Form, Input, Row, Typography } from "antd";
import { useForm } from "antd/lib/form/Form";
import {useNavigate} from 'react-router-dom'
import React from 'react'
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { sendPayment } from "../../../redux/paymentSlice";
import NumberFormat from "react-number-format"

const PaymentForm = () => {
  const selectedPackages = useSelector(state => state.packages.selectedPackages);
  const totalAmount = useSelector(state => state.packages.currentPrice);
  const [form] = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = (values) => {
    const packageIds = selectedPackages.map((item) => String(item.id));
    const expireDate = moment(values.expireDate).format("MM/YY");
    const paymentInfo = {
      ...values,
      packageIds: packageIds,
      expireDate: expireDate,
      totalAmount: Number(totalAmount),
    };
    dispatch(sendPayment(paymentInfo));
    navigate("/payment/success");
  };

  const handleDateChange = (date) => {
    form.setFieldsValue("expireDate", date);
  };

  return (
    <>
    <Typography.Title level={5}  >Kart Bilgileri</Typography.Title>
    <Card className="border-rounded">
    <Form id="paymentForm" form={form} layout="vertical" name="paymentForm" onFinish={onFinish}>
        <Row gutter={24}>
        <Col span={12}>
        <Form.Item name="cardHolderName" label="Kart Üzerindeki İsim Soyisim" rules={[{required: true, message: "Lütfen kart üzerinde olan soyisimi yazın!"}]} validateTrigger="onBlur">
          <Input className="border-rounded" />
        </Form.Item>
        </Col>
        </Row>
        <Row gutter={24}>
          <Col span={12}>
          <Form.Item name="cardNumber" label="Kart Numarası" rules={[{required: true, message: "Lütfen kart numarasını yazın1", pattern: /\d+/ }, {type:"string", len: 19 , message: "Lütfen doğru sayıda numara giriniz!", pattern: /\d+$/}]} validateTrigger="onBlur">
            <NumberFormat format="#### #### #### ####" mask="_" customInput={Input} className="border-rounded"/>
          </Form.Item>
          </Col>
          <Col span={6}>
          <Form.Item name="expireDate" label="Son Kul. Tar." rules={[{required: true, message: "Lütfen kart üzerindeki son kullanma tarihini yazın!"}]} onChange={handleDateChange} validateTrigger="onBlur">
            <DatePicker picker="month" format={"MM/YY"} className="border-rounded"  />
          </Form.Item>
          </Col>
          <Col span={6}>
          <Form.Item name="cvv" label="CVV/CVC" rules={[{required: true, message: "Lütfen kart üzerindeki cvv/cvc numarasını yazın"}, {len: 3, message: "3 haneli olmalıdır!"}]} validateTrigger="onBlur">
            <Input.Password visibilityToggle={false} className="border-rounded" />
          </Form.Item>
          </Col>
        </Row>
      </Form>
      </Card>
      </>
  )
}

export default PaymentForm