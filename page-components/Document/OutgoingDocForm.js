import {
   Form,
   Input,
   Button,
   Radio,
   Upload,
   DatePicker,
   Checkbox,
   Row,
   Col,
} from "antd";

import { UploadOutlined } from "@ant-design/icons";

import Title from "@/components/layout/Title";

const renderForm = () => {
   return (
      <Form
         name="basic"
         labelCol={{ span: 2 }}
         wrapperCol={{ span: 16 }}
         autoComplete="off"
         size="large"
      >
         <Form.Item label="លេខលិខិតចេញ" style={{ marginBottom: 0 }}>
            <Form.Item
               name="#"
               rules={[{ required: true, message: "Please input #!" }]}
               style={{ display: "inline-block", width: "calc(50% - 8px)" }}
            >
               <Input placeholder="#" className="shadow-md" />
            </Form.Item>
            <Form.Item
               name="#"
               rules={[{ required: true, message: "Please input #!" }]}
               style={{
                  display: "inline-block",
                  width: "calc(50% - 8px)",
                  marginLeft: 16,
               }}
            >
               <Input placeholder="#" className="shadow-md" />
            </Form.Item>
         </Form.Item>

         <Form.Item
            label="ថ្ងៃខែឆ្នាំចុះលិខិត"
            name="#"
            rules={[{ required: true, message: "Please input #!" }]}
         >
            <DatePicker className="shadow-md w-full" />
         </Form.Item>

         <Form.Item
            label="មកពីក្រសួង-ស្ថាប័ន"
            name="#"
            rules={[{ required: true, message: "Please input #!" }]}
         >
            <Input placeholder="ក្រសួងមហាផ្ទៃ" className="shadow-md" />
         </Form.Item>

         <Form.Item
            label="លិខិតបទដ្ឋានគតិយុត្តិ"
            name="#"
            rules={[{ required: true, message: "Please input #!" }]}
         >
            <Radio.Group onChange={null} value={"បញ្ចប់ត្រឹមក្រសួង"}>
               <Radio value="បញ្ចប់ត្រឹមក្រសួង">បញ្ចប់ត្រឹមក្រសួង</Radio>
               <Radio value="បញ្ចូលដល់ក្រសួង-ស្ថាប័ន">
                  បញ្ចូលដល់ក្រសួង-ស្ថាប័ន
               </Radio>
            </Radio.Group>
         </Form.Item>

         <Form.Item label="បញ្ចូលឯកសារស្កេន" style={{ marginBottom: 0 }}>
            <div>
               <Upload name="logo" action="/upload.do" listType="picture">
                  <Button icon={<UploadOutlined />} className="shadow-md">
                     Click to upload
                  </Button>
               </Upload>
            </div>
         </Form.Item>

         <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
               រក្សាទុក
            </Button>
         </Form.Item>

         <Form.Item>
            <div className="lg:pl-32 mt-5 md:pl-6 mx-auto">
               <Button
                  htmlType="submit"
                  className="lg:w-44 md:w-32 rounded-3xl"
               >
                  កែប្រែលិខិត
               </Button>
               <Button
                  htmlType="submit"
                  className="mx-12 lg:w-44 md:w-32 rounded-3xl"
               >
                  កំណត់បង្ហាញលិខិត
               </Button>
               <Button
                  htmlType="submit"
                  className="mr-12 lg:w-44 md:w-32 rounded-3xl"
               >
                  Print & Preview
               </Button>
            </div>
         </Form.Item>
      </Form>
   );
};

const OutgoingDocForm = () => {
   return (
      <div className="outgoing-doc-form">
         {/* Title */}
         <Title text="បញ្ចូលព័ត៌មានឯកសារចេញលេខថ្មី"></Title>

         {/* Form */}
         <div className="mt-5">{renderForm()}</div>

         <style global jsx>{`
            .outgoing-doc-form .ant-form-horizontal .ant-form-item-label {
               text-align: left !important;
            }
         `}</style>
      </div>
   );
};

export default OutgoingDocForm;
