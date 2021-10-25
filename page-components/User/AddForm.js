import { Form, Input, Button, Radio, Upload } from "antd";

import Image from "next/image";

import { UploadOutlined } from "@ant-design/icons";

import Title from "@/components/layout/Title";

const renderForm = () => {
   return (
      <Form
         name="basic"
         labelCol={{ span: 2 }}
         wrapperCol={{ span: 16 }}
         autoComplete="off"
      >
         <Form.Item label="ឈ្មោះខ្មែរ" style={{ marginBottom: 0 }}>
            <Form.Item
               name="firstname"
               rules={[{ required: true, message: "Please input firstname!" }]}
               style={{ display: "inline-block", width: "calc(50% - 8px)" }}
            >
               <Input placeholder="នាម" size="large" className="shadow-md" />
            </Form.Item>
            <Form.Item
               name="lastname"
               rules={[{ required: true, message: "Please input lastname!" }]}
               style={{
                  display: "inline-block",
                  width: "calc(50% - 8px)",
                  marginLeft: 16,
               }}
            >
               <Input
                  placeholder="គោត្តនាម"
                  size="large"
                  className="shadow-md"
               />
            </Form.Item>
         </Form.Item>

         <Form.Item
            label="ឈ្មោះចូលប្រើ"
            name="username"
            rules={[{ required: true, message: "Please input username!" }]}
         >
            <Input
               size="large"
               placeholder="ឈ្មោះចូលប្រើ"
               className="shadow-md"
            />
         </Form.Item>

         <Form.Item label="លេខសំងាត់ចូលប្រើ" style={{ marginBottom: 0 }}>
            <Form.Item
               name="password"
               rules={[{ required: true, message: "Please input password!" }]}
               style={{ display: "inline-block", width: "calc(50% - 8px)" }}
            >
               <Input
                  placeholder="លេខសំងាត់"
                  size="large"
                  className="shadow-md"
               />
            </Form.Item>
            <Form.Item
               name="confirmPassword"
               rules={[{ required: true, message: "Please input password!" }]}
               style={{
                  display: "inline-block",
                  width: "calc(50% - 8px)",
                  marginLeft: 16,
               }}
            >
               <Input
                  placeholder="លេខសំងាត់"
                  size="large"
                  className="shadow-md"
               />
            </Form.Item>
         </Form.Item>

         <Form.Item
            label="ភេទ"
            name="gender"
            rules={[{ required: true, message: "Please input your username!" }]}
         >
            <Radio.Group onChange={null} value={1}>
               <Radio value="male">ប្រុស</Radio>
               <Radio value="female">ស្រី</Radio>
            </Radio.Group>
         </Form.Item>

         <Form.Item label="ទំនាក់ទំនង" style={{ marginBottom: 0 }}>
            <Form.Item
               name="phone"
               rules={[{ required: true, message: "Please input firstname!" }]}
               style={{ display: "inline-block", width: "calc(50% - 8px)" }}
            >
               <Input
                  placeholder="លេខទូរសព្ទ"
                  size="large"
                  className="shadow-md"
               />
            </Form.Item>
            <Form.Item
               name="email"
               rules={[{ required: true, message: "Please input lastname!" }]}
               style={{
                  display: "inline-block",
                  width: "calc(50% - 8px)",
                  marginLeft: 16,
               }}
            >
               <Input placeholder="អ៊ីមែល" size="large" className="shadow-md" />
            </Form.Item>
         </Form.Item>

         <Form.Item label="បញ្ចូលរូបថត" style={{ marginBottom: 0 }}>
            <div>
               <div className="w-28 h-28 mb-3">
                  <Image
                     src="/logo.png"
                     width="100%"
                     height="100%"
                     layout="responsive"
                     objectFit="contain"
                  />
               </div>
               <Upload name="logo" action="/upload.do" listType="picture">
                  <Button icon={<UploadOutlined />} className="shadow-md">
                     Click to upload
                  </Button>
               </Upload>
            </div>
         </Form.Item>

         <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
               Submit
            </Button>
         </Form.Item>
      </Form>
   );
};

const AddForm = () => {
   return (
      <div className="bg-white p-3 h-full add-user-form">
         {/* Title */}
         <Title text="បញ្ចូលព័ត៌មានអ្នកប្រើប្រាស់"></Title>

         {/* Form */}
         <div className="mt-5">{renderForm()}</div>

         <style global jsx>{`
            .add-user-form .ant-form-horizontal .ant-form-item-label {
               text-align: left !important;
            }
         `}</style>
      </div>
   );
};

export default AddForm;
