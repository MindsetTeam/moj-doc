import { FileOutlined } from "@ant-design/icons";

const Card = ({ color, text, count }) => {
   return (
      <div
         className="shadow bg-white mb-5 flex justify-between px-9 py-10 text-2xl rounded-lg"
         style={{ border: `1px solid ${color}` }}
      >
         <div>
            <FileOutlined className="mr-2" style={{ color }}></FileOutlined>
            <span style={{ color }}>{text}</span>
         </div>
         <div style={{ color }}>{count} សំណុំ</div>
         <style global jsx>{`
            .anticon svg {
               display: block;
            }
         `}</style>
      </div>
   );
};

export default Card;
