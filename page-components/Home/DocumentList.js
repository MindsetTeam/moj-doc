import { Input, Select, DatePicker } from "antd";
import React, { useState } from "react";

import DocTable from "@/components/Home/DocTable";

const { Search } = Input;
const { Option } = Select;

const DocumentList = () => {
   const onSearch = (value) => console.log(value);
   const onHandleChange = (value) => console.log(value);
   const onStartDateChange = (date, dateString) =>
      console.log(date, dateString);
   const onEndDateChange = (date, dateString) => console.log(date, dateString);

   return (
      <div className="bg-white p-3">
         <div>
            {/* Row1 */}
            <Search
               className=" w-full"
               placeholder="ស្វែងរកពាក្យគន្លឹះ/កម្មវត្ថុ/លេខលិខិតដើម/លេខលិខិតចូល"
               onSearch={onSearch}
               size="large"
            />
            {/* Row2 */}
            <div className="flex my-4">
               <Select
                  className="flex-1"
                  placeholder="មកពីក្រសួង"
                  onChange={onHandleChange}
                  size="large"
               >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="Yiminghe">yiminghe</Option>
               </Select>
               <Select
                  className="flex-1"
                  placeholder="ស្ថាប័នទទួល"
                  style={{ margin: "0px 10px" }}
                  onChange={onHandleChange}
                  size="large"
               >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="Yiminghe">yiminghe</Option>
               </Select>
               <Select
                  className="flex-1 "
                  placeholder="ប្រភេទចរន្តលិខិត"
                  onChange={onHandleChange}
                  size="large"
               >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="Yiminghe">yiminghe</Option>
               </Select>
            </div>
            {/* Row3 */}
            <div className="flex">
               <DatePicker
                  placeholder="ថ្ងៃខែឆ្នាំចាប់ផ្ដើម"
                  className="flex-1"
                  onChange={onStartDateChange}
                  size="large"
               />
               <DatePicker
                  placeholder="ថ្ងៃខែឆ្នាំចុងក្រោយ"
                  onChange={onEndDateChange}
                  style={{ margin: "0px 10px" }}
                  size="large"
                  className="flex-1"
               />
               <Select
                  className="flex-1"
                  placeholder="ប្រភេទលិខិតបទដ្ឋានគតិយុត្ត"
                  onChange={onHandleChange}
                  size="large"
               >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="Yiminghe">yiminghe</Option>
               </Select>
            </div>

            {/* Table */}
            <div className="mt-5">
               <DocTable></DocTable>
            </div>
         </div>
      </div>
   );
};

export default DocumentList;
