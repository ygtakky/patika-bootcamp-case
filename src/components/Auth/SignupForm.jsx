import { Button, Card, Form, Input } from 'antd'
import {UserOutlined, MailOutlined} from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { signupUser } from '../../redux/userSlice'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const cardItemStyles = {
  marginBottom: 49,
}

const SignupForm = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home")
    }
  }, [navigate, isLoggedIn])

  const onFinish = (values) => {
    dispatch(signupUser(values));
  };

  return (
    <div className='app__signup'>
    <Card className='app__signup__card'>
    <Form name="signup" form={form} layout='vertical' className='login-form' initialValues={""} onFinish={onFinish}>
      <Form.Item name="fullName" label="Adınız ve Soyadınız" rules={[{required: true, message: 'Lütfen adınızı ve soyadınızı girin!', type: "string"}]} style={cardItemStyles}>
        <Input size='large' className='border-rounded' prefix={<UserOutlined className="site-form-item-icon"></UserOutlined>} />
      </Form.Item>
      <Form.Item name="email" label="Email Adresiniz" rules={[{required: true, message: "Lütfen mailinizi giriniz!", type: "email"}]} style={cardItemStyles}>
        <Input size='large' className='border-rounded' prefix={<MailOutlined className="site-form-item-icon"></MailOutlined>} />
      </Form.Item>
      <Form.Item>
        <Button style={{width: "100%", height: "100%"}} size="large" className='standard border-rounded' type='primary' htmlType='submit' >Devam Et</Button>
      </Form.Item>
    </Form>
    </Card>
    </div>
  )
}

export default SignupForm