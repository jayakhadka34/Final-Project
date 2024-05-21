import React from "react";
import { Button, DatePicker, Form, Input, InputNumber } from "antd";
import { Link } from "react-router-dom";
const { RangePicker } = DatePicker;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};
const BookNow = () => (
  <Form
  {...formItemLayout}
  variant="filled"
  style={{
    maxWidth: 600,
    height: "900px", 
    width: "auto", 
    backgroundImage: "url('https://pearlsevencosmetics.com/wp-content/uploads/2022/08/land-background-5-1024x629-1.jpeg')",
    backgroundSize: "cover", 
    backgroundPosition: "center",
    
  }}
  
  >
    <Form.Item
      label="Name"
      name="Input"
      rules={[
        {
          required: true,
          message: "Please input!",
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Phone Number"
      name="InputNumber"
      rules={[
        {
          required: true,
          message: "Please input!",
        },
      ]}
    >
      <InputNumber
        style={{
          width: "100%",
        }}
      />
    </Form.Item>

    <Form.Item
      label="Message"
      name="TextArea"
      rules={[
        {
          required: true,
          message: "Please input!",
        },
      ]}
    >
      <Input.TextArea />
    </Form.Item>

    <Form.Item
      label="DatePicker"
      name="DatePicker"
      rules={[
        {
          required: true,
          message: "Please input!",
        },
      ]}
    >
      <DatePicker />
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 6,
        span: 16,
      }}
    >
      <Link to="/ordernow">
        <div class="flex justify-center items-center  marginBottom-30px">
          <Button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
            Submit
          </Button>
        </div>
      </Link>
    </Form.Item>
  </Form>
);
export default BookNow;
