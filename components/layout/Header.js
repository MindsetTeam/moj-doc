import Image from "next/image";
import Link from "next/link";

import { Menu, Avatar, Dropdown } from "antd";
import { DownOutlined, EditOutlined, LogoutOutlined } from "@ant-design/icons";

const dropDownMenu = (
   <Menu>
      <Menu.Item>
         {/* <Link href="/personal">
            <a> */}
         <EditOutlined className="mr-1"></EditOutlined>កែប្រែ
         {/* </a>
         </Link> */}
      </Menu.Item>
      <Menu.Item>
         <LogoutOutlined className="mr-1"></LogoutOutlined>ចាកចេញ
      </Menu.Item>
   </Menu>
);

const Header = () => {
   return (
      <div className="flex justify-between p-2 bg-white px-4 shadow-2xl">
         <div className="flex">
            <div className="w-12">
               <Image
                  src="/logo.png"
                  width="100%"
                  height="100%"
                  layout="responsive"
                  objectFit="contain"
               />
            </div>
            <p className="self-center mb-0 pl-2 text-red-900 text-lg">
               ប្រព័ន្ធគ្រប់គ្រងមន្រ្ដីរាជការស៊ីវិល
            </p>
         </div>

         <div className="flex">
            <div className="self-center">
               <Avatar src="/noImg.jpg" />
            </div>
            <div className="self-center ml-5">
               <Dropdown overlay={dropDownMenu}>
                  <div>
                     <span className="pr-5">Unknown</span>
                     <DownOutlined></DownOutlined>
                  </div>
               </Dropdown>
            </div>
         </div>
      </div>
   );
};

export default Header;
