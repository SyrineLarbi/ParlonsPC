import React,{useState} from 'react'
import {Form, Input, Button, Checkbox, Row,Col, message} from "antd"
import { LockOutlined, MailOutlined ,UserAddOutlined} from '@ant-design/icons';
import { get } from "lodash";
import SocialNetworks from './SocialNetworks';



export default function Signup() {
    // const [loading, setLoading] = useState(false);
    // const finishForm= async (values) => {
    //      try{
    //         console.log("Received values of form:", values);
    //         const loadValues = {
    //             firstName : get (values, "firstName"),
    //             lastName : get (values, "lastName"),
    //             email : get (values , "email"),
    //             password : get (values , "password"),
    //         };
    //         setLoading(true);
    //     } catch (error){
    //         const errorMessage = get (error, "error.message", "Something went wrong ! ");
    //         message.error(errorMessage);
    //         setLoading(false);
    //     }
    // };
  return (
   <Form autoComplete='off' name='signup'>
       <div className='text-center'>Create Account</div>
       <div className='choice-text'>or use your email for registration</div>
       <SocialNetworks/>
        <Row gutter={{xs: 8, sm: 16}}>
            <Col className='gutter-row' xs={{span:24}} md={{span:12}}>
                <Form.Item 
                label="First name" name="firstName" labelCol={{span:24}} wrapperCol={{ span: 24 }}
                rules={[
                  {
                    required: true,
                    message: "Please input your first name.",
                  },
                  {
                    min: 2,
                    message: "Your first name must be at least 2 characters.",
                  },
                ]} >
                    <Input placeholder="First name" size='large' />
                </Form.Item>
            </Col>
            <Col className="gutter-row" xs={{ span: 24 }} md={{ span: 12 }}>
            <Form.Item
              name="lastName"
              label="Last name"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              rules={[
                {
                  required: true,
                  message: "Please input your last name.",
                },
                {
                  min: 2,
                  message: "Your last name must be at least 2 characters.",
                },
              ]}
            >
              <Input placeholder="Last name" size="large" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          name="email"
          label="Email address"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please input your email.",
            },
            {
              type: "email",
              message: "Votre email est invalide.",
            },
          ]}
        >
          <Input placeholder="Email" size="large"  prefix={<MailOutlined className="site-form-item-icon" />}   />
        </Form.Item>
        <Row gutter={{ xs: 8, sm: 16 }}>
          <Col className="gutter-row" xs={{ span: 24 }} md={{ span: 12 }}>
            <Form.Item
              name="password"
              label="Password"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              rules={[
                {
                  required: true,
                  message: "Please input your password.",
                },
                { min: 6, message: "Password must be minimum 6 characters." },
              ]}
            >
              <Input.Password placeholder="Password" size="large"   prefix={<LockOutlined className="site-form-item-icon" />} />
            </Form.Item>
          </Col>

          <Col className="gutter-row" xs={{ span: 24 }} md={{ span: 12 }}>
            <Form.Item
              name="confirm"
              label="Confirm Password"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              dependencies={["password"]}
              rules={[
                {
                  required: true,
                  message: "Confirm your password.",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password placeholder="Confirm password" size="large" />
            </Form.Item>
          </Col>
        </Row>
        
        <Button
          type="primary"
        //   loading={loading}
          className="form-submit-btn"
          htmlType="submit"
          shape="round"
          icon={<UserAddOutlined />}
          size="large"
        >
          Sign Up
        </Button>

   </Form>
  )
}
