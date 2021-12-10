import { Radio } from "antd";

import React, { useState } from "react";

import OriginalDocForm from "@/page-components/Document/OriginalDocForm";
import IncomingDocForm from "@/page-components/Document/IncomingDocForm";

import OutgoingDocForm from "@/page-components/Document/OutgoingDocForm";

const add = () => {
   const [fileType, setFileType] = useState("ឯកសារចូល");
   return (
      <div className="p-4 ">
         <div className="bg-white p-3 ">
            <div className="mb-3">
               <Radio.Group
                  onChange={(e) => setFileType(e.target.value)}
                  value={fileType}
               >
                  <Radio value="ឯកសារចូល">ឯកសារចូល</Radio>
                  <Radio value="ឯកសារចេញ">ឯកសារចេញ</Radio>
                  <Radio value="ឯកសារបណ្ដឹង">ឯកសារបណ្ដឹង</Radio>
                  <Radio value="ឯកសារសម្ងាត់">ឯកសារសម្ងាត់</Radio>
               </Radio.Group>
            </div>
            {fileType === "ឯកសារចូល" && (
               <div>
                  <OriginalDocForm></OriginalDocForm>
                  <IncomingDocForm></IncomingDocForm>
               </div>
            )}
            {fileType === "ឯកសារចេញ" && (
               <div>
                  <OutgoingDocForm></OutgoingDocForm>
               </div>
            )}
         </div>
      </div>
   );
};

export default add;
