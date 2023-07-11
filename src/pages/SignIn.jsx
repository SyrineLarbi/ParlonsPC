import React from 'react'
import {Form, Input, Button} from "antd";
import { LockOutlined, MailOutlined,LoginOutlined } from '@ant-design/icons';
import SocialNetworks from './SocialNetworks';
 
export default function SignIn() {
  return (
    <div>
        <Form name="signin" initialValues={{remember : false}} autoComplete='off' >
         <div className='text-center'>Sign In</div>
         <SocialNetworks/>
         <div className='choice-text'>or use your account</div>
         <Form.Item name="email" label="Email address" labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}
          rules={[
            {
              required: true,
              message: "Please input your email.",
            },
            {
              type: "email",
              message: "Your email is invalid.",
            },
          ]}>
             <Input placeholder="Email" size="large" prefix={<MailOutlined className="site-form-item-icon" />} />
         </Form.Item>
         <Form.Item
          name="password" label="Password" labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}
          rules={[
            {
              required: true,
              message: "Please input your password.",
            },
            { min: 6, message: "Password must be minimum 6 characters." },
          ]}
        >
          <Input.Password placeholder="Password" size="large" prefix={<LockOutlined className="site-form-item-icon" />}  />
        </Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          shape="round"
          icon={<LoginOutlined />}
          size="large"
        >
          Sign In
        </Button>
        </Form>
    </div>
  )
}
