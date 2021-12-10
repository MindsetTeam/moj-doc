import { Form, Input, Button, Radio, Upload, DatePicker, Checkbox } from "antd";

import Title from "@/components/layout/Title";

const { TextArea } = Input;

const docStatusOptions = [
   { label: "ចូលនាយកដ្ឋានកិច្ចរដ្ឋបាល", value: "ចូលនាយកដ្ឋានកិច្ចរដ្ឋបាល" },
   { label: "កំពុងបញ្ចូន", value: "កំពុងបញ្ចូន" },
   { label: "បញ្ចប់", value: "បញ្ចប់" },
];

const renderForm = () => {
   return (
      <Form
         name="basic"
         labelCol={{ span: 2 }}
         wrapperCol={{ span: 16 }}
         autoComplete="off"
         size="large"
      >
         <Form.Item label="លេខលិខិតដើម" style={{ marginBottom: 0 }}>
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
            label="មកពីក្រសួង-ស្ថាប័ន"
            name="#"
            rules={[{ required: true, message: "Please input #!" }]}
         >
            <Input placeholder="ក្រសួងមហាផ្ទៃ" className="shadow-md" />
         </Form.Item>

         <Form.Item
            label="ថ្ងៃខែឆ្នាំលិខិតដើម"
            name="#"
            rules={[{ required: true, message: "Please input #!" }]}
         >
            <DatePicker className="shadow-md w-full" />
         </Form.Item>

         <Form.Item
            label="លិខិតបទដ្ឋានគតិយុត្តិ"
            name="#"
            rules={[{ required: true, message: "Please input #!" }]}
         >
            <Input placeholder="#" className="shadow-md" />
         </Form.Item>

         <Form.Item
            label="កម្មវត្ថុលិខិត"
            name="#"
            rules={[{ required: true, message: "Please input #!" }]}
         >
            <TextArea rows={4} placeholder="#" className="shadow-md" />
         </Form.Item>

         <Form.Item
            label="ស្ថានភាពលិខិត"
            name="#"
            rules={[{ required: true, message: "Please input #!" }]}
         >
            <Checkbox.Group
               options={docStatusOptions}
               defaultValue={["ចូលនាយកដ្ឋានកិច្ចរដ្ឋបាល"]}
               onChange={null}
            />
         </Form.Item>
      </Form>
   );
};

const OriginalDocForm = () => {
   return (
      <div className="original-doc-form">
         {/* Title */}
         <Title text="បញ្ចូលព័ត៌មានឯកសារដើម"></Title>

         {/* Form */}
         <div className="mt-5">{renderForm()}</div>

         <style global jsx>{`
            .original-doc-form .ant-form-horizontal .ant-form-item-label {
               text-align: left !important;
            }
         `}</style>
      </div>
   );
};

export default OriginalDocForm;
