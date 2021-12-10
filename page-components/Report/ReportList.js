import Title from "@/components/layout/Title";
import ReportTable from "@/components/Report/ReportTable";

import { Form, Input, Button, Select, DatePicker } from "antd";

const { Option } = Select;

const renderForm = () => {
   const onHandleChange = (value) => console.log(value);
   const onStartDateChange = (date, dateString) =>
      console.log(date, dateString);
   const onEndDateChange = (date, dateString) => console.log(date, dateString);

   return (
      <Form
         name="basic"
         labelCol={{ span: 2 }}
         wrapperCol={{ span: 16 }}
         autoComplete="off"
         size="large"
      >
         <Form.Item
            label="ប្រភេទឯកសារ"
            name="docType"
            rules={[{ required: true, message: "Please input your username!" }]}
         >
            <Select
               placeholder="ប្រភេទឯកសារ"
               onChange={onHandleChange}
               className="shadow-md"
            >
               <Option value="ទាំងអស់">ទាំងអស់</Option>
               <Option value="ឯកសារចូល">ឯកសារចូល</Option>
               <Option value="ឯកសារចេញ">ឯកសារចេញ</Option>
               <Option value="ឯកសារបណ្ដឹង">ឯកសារបណ្ដឹង</Option>
               <Option value="ឯកសារសម្ងាត់">ឯកសារសម្ងាត់</Option>
            </Select>
         </Form.Item>

         <Form.Item
            label="កាលបរិឆ្ឆែត"
            name="date"
            rules={[{ required: true, message: "Please input your username!" }]}
         >
            <Select
               placeholder="កាលបរិឆ្ឆែត"
               onChange={onHandleChange}
               className="shadow-md"
            >
               <Option value="ថ្ងៃនេះ">ថ្ងៃនេះ</Option>
               <Option value="ប្រចាំខែ">ប្រចាំខែ</Option>
               <Option value="ប្រចាំឆ្នាំ">ប្រចាំឆ្នាំ</Option>
            </Select>
         </Form.Item>

         <Form.Item
            label="ប្រភេទលិខិត"
            name="letterType"
            rules={[{ required: true, message: "Please input your username!" }]}
         >
            <Select
               placeholder="ប្រភេទលិខិតបទដ្ឋានគតិយុត្ត"
               onChange={onHandleChange}
               className="shadow-md"
            >
               <Option value="jack">Jack</Option>
               <Option value="lucy">Lucy</Option>
               <Option value="Yiminghe">yiminghe</Option>
            </Select>
         </Form.Item>

         <Form.Item
            label="មកពីក្រសួង-ស្ថាប័ន"
            name="date"
            rules={[{ required: true, message: "Please input your username!" }]}
         >
            <Select
               placeholder="ក្រសួង-ស្ថាប័ន"
               onChange={onHandleChange}
               className="shadow-md"
            >
               <Option value="jack">Jack</Option>
               <Option value="lucy">Lucy</Option>
               <Option value="Yiminghe">yiminghe</Option>
            </Select>
         </Form.Item>

         <Form.Item label="ទំនាក់ទំនង" style={{ marginBottom: 0 }}>
            <Form.Item
               name="phone"
               rules={[{ required: true, message: "Please input firstname!" }]}
               style={{ display: "inline-block", width: "calc(50% - 8px)" }}
            >
               <DatePicker
                  placeholder="ថ្ងៃខែឆ្នាំចាប់ផ្ដើម"
                  onChange={onStartDateChange}
                  className="w-full shadow-md"
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
               <DatePicker
                  placeholder="ថ្ងៃខែឆ្នាំចុងក្រោយ"
                  onChange={onEndDateChange}
                  className="w-full shadow-md"
               />
            </Form.Item>
         </Form.Item>

         <Form.Item>
            <div className="lg:pl-32 mt-5 md:pl-6 mx-auto">
               <Button
                  type="primary"
                  htmlType="submit"
                  className="lg:w-44 md:w-32 rounded-3xl"
               >
                  Search
               </Button>
               <Button
                  htmlType="submit"
                  className="mx-12 lg:w-44 md:w-32 rounded-3xl"
               >
                  Print Preview All
               </Button>
               <Button
                  type="danger"
                  htmlType="submit"
                  className="lg:w-44 md:w-32 rounded-3xl"
               >
                  Clear
               </Button>
            </div>
         </Form.Item>
      </Form>
   );
};

const ReportList = () => {
   return (
      <div className="bg-white p-3 h-full report">
         {/* Title */}
         <Title text="ជ្រើសរើសព័ត៌មានលិខិតចង់បាន"></Title>

         {/* Form */}
         <div className="mt-5">{renderForm()}</div>

         {/* Table */}
         <div className="mt-5">
            <ReportTable></ReportTable>
         </div>

         <style global jsx>{`
            .report .ant-form-horizontal .ant-form-item-label {
               text-align: left !important;
            }
         `}</style>
      </div>
   );
};

export default ReportList;
