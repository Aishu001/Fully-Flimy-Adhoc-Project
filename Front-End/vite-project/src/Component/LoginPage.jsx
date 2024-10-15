import React from 'react';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import '../App.css';

function LoginPage() {
  const navigate = useNavigate(); 
  const onFinish = (values) => {
    const { email } = values;
    
    // Check if the email is the admin email
    if (email === 'admin123@gmail.com') { 
      navigate('/dashboard'); 
    } else {
      navigate('/shoppingPage'); 
    }
  };

  return (
    <>
      <div className="login-container">
        {/* Image on the left */}
        <div className="login-image">
          <img src="login.jpeg" alt="Login" />
        </div>

        {/* Form on the right */}
        <div className="login-form">
          <Form onFinish={onFinish}>
            <Form.Item
              name="email"
              label="Email ID"
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
