import { FileAddOutlined } from "@ant-design/icons";

const Title = ({ text }) => {
   return (
      <div className="bg-red-900 text-white flex p-3">
         <FileAddOutlined
            style={{ color: "#fff", fontSize: "1.5rem", marginRight: 5 }}
         ></FileAddOutlined>
         <p className="text-lg mb-0 ">{text}</p>
      </div>
   );
};

export default Title;
