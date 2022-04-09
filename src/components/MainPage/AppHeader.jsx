import { Avatar, PageHeader } from 'antd'
import {UserOutlined} from '@ant-design/icons'
import React from 'react'
import { useSelector } from 'react-redux'

const AppHeader = () => {
  const user = useSelector(state => state.user.user)
  return (
    <PageHeader className='app__header' title={<img alt="logo" style={{height: "40px"}} src="https://www.ecozum.com.tr/wp-content/uploads/2018/04/e%C3%A7%C3%B6z%C3%BCm-logo.png" />} extra={[<Avatar key={1} size="large" icon={<UserOutlined />} />, <div key={2}>{user.fullName}</div>]} />
  )
}

export default AppHeader