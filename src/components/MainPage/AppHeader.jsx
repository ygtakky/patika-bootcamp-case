import { Avatar, PageHeader } from 'antd'
import {UserOutlined} from '@ant-design/icons'
import React from 'react'
import { useSelector } from 'react-redux'

const AppHeader = () => {
  const user = useSelector(state => state.user.user)
  return (
    <PageHeader className='app__header' title="Eçözüm" extra={[<Avatar key={1} size="large" icon={<UserOutlined />} />, <div key={2}>{user.fullName}</div>]} />
  )
}

export default AppHeader