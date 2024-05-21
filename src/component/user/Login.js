// import React from 'react';
// import { Button, Card, Checkbox, Form, Input } from 'antd';
// const onFinish = (values) => {
//   console.log('Success:', values);
// };
// const onFinishFailed = (errorInfo) => {
//   console.log('Failed:', errorInfo);
// };
// const Login = () => (
// <div className="Login_back">
// <Card className="login_user"
//  >
  
//  <Form
//     name="basic"
//     labelCol={{
//       span: 8,
//     }}
//     wrapperCol={{
//       span: 16,
//     }}
//     style={{
//       maxWidth: 600,
//     }}
//     initialValues={{
//       remember: true,
//     }}
//     onFinish={onFinish}
//     onFinishFailed={onFinishFailed}
//     autoComplete="off"
//   >
//     <Form.Item
//       label="Username"
//       name="username"
//       rules={[
//         {
//           required: true,
//           message: 'Please input your username!',
//         },
//       ]}
//     >
//       <Input />
//     </Form.Item>

//     <Form.Item
//       label="Password"
//       name="password"
//       rules={[
//         {
//           required: true,
//           message: 'Please input your password!',
//         },
//       ]}
//     >
//       <Input.Password />
//     </Form.Item>

//     <Form.Item
//       name="remember"
//       valuePropName="checked"
//       wrapperCol={{
//         offset: 8,
//         span: 16,
//       }}
//     >
//       <Checkbox>Remember me</Checkbox>
//     </Form.Item>

//     <Form.Item
//       wrapperCol={{
//         offset: 8,
//         span: 16,
//       }}
//     >
//       <Button type="primary" htmlType="submit" >
//         Submit
//       </Button>
//     </Form.Item>
//   </Form>
//  </Card>
// </div>
// );
// export default Login;
import { Card } from "antd";
import { React } from "react";
import { Button, Checkbox, Form, Input,Modal } from 'antd';
import { Link } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";
import { useState } from "react";
import {Provider, useDispatch} from "react-redux"
import { userLogin } from "../services/LoginAction";
import {useSelector} from "react-redux";
//import { data } from "autoprefixer";


const LogIn = () => {
  //const [isLoading,setIsLoading]=useState(false);
  const dispatch=useDispatch();
  const onFinish =async (values) => {
    console.log("val:", values)
    userLogin(values)(dispatch).unwrap();
  };

  const [isModalOpen,setIsModalOpen] =useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const data=useSelector((state)=>state)
  console.log("add2e",data.authinfo.loading)

  return (
   
      <div className="Login_back">
      <Card className="login_user">
    
        <h1 className=" text-lg pb-4 font-bold">Login</h1>
        <div className=" flex">
          <div>
            <Form
              onFinish={onFinish} layout="vertical">
              <section className=" text-left">
                <Form.Item label="UserName"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your username!',
                    },
                  ]} className=" my-2">
                  
                  <Input className=" w-64" />
                </Form.Item>

                <Form.Item label="PassWord"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]} className=" my-2">
                  
                  <Input.Password className=" w-64 " />
                </Form.Item>
              </section>

              <section className=" text-left ">
                <Form.Item className=" my-2">
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <section className="flex gap-2">
                  <Form.Item>
                    <Button className=" bg-black text-white border-none " htmlType="submit"
                    loading={data.authinfo.loading}>
                      Submit
                    </Button>
                  </Form.Item>
                  <Form.Item>
                    <Button className=" bg-black text-white border-none " htmlType="submit">
                      <Link to="/signup"> <p className=" font-varela">SignUp</p></Link>
                    </Button>
                  </Form.Item>

                  <Form.Item>
                    <Link to="/"> <p> <HomeOutlined /></p> </Link>
                  </Form.Item>
                </section>
                <section>
                  <div className='cursor-pointer underline text-white' onClick={showModal}>
                   ForgetPassword   </div>
                </section>
              </section>
            </Form>
          </div>

          <Modal title="Get a code"  open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        
      </Modal>
        </div>
      </Card>

    </div>

 
  )
}

export default LogIn;