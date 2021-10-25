import { Table, Tag, Space, Button } from "antd";
import React, { useState } from "react";

const DocTable = () => {
   const [data, setData] = useState([
      {
         id: 1,
         subject: "hi",
         letterNum: 1,
         date: "1",
         letterFlow: 1,
         status: "2",
      },
   ]);

   const columns = [
      {
         title: "ក្រូណូ",
         dataIndex: "id",
         key: "id",
      },
      {
         title: "កម្មវត្ថុ",
         dataIndex: "subject",
         key: "subject",
      },
      {
         title: "លេខលិខិត",
         dataIndex: "letterNum",
         key: "letterNum",
      },
      {
         title: "កាលបរិច្ឆេទ",
         dataIndex: "date",
         key: "date",
      },
      {
         title: "ចរន្តលិខិត",
         dataIndex: "letterFlow",
         key: "letterFlow",
      },
      {
         title: "ស្ថានភាព",
         dataIndex: "status",
         key: "status",
      },
      {
         title: "សកម្មភាព",
         key: "action",
         render: (text, record) => (
            <Space size="middle">
               <Button size="small">Preview</Button>
               <Button size="small">Print</Button>
            </Space>
         ),
      },
   ];
   return <Table columns={columns} dataSource={data} />;
};

export default DocTable;
