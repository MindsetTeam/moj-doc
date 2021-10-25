import Link from "next/link";

import { Menu } from "antd";
import {
   HomeOutlined,
   UserOutlined,
   ContainerOutlined,
} from "@ant-design/icons";

const Sidebar = () => {
   return (
      <div className="bg-red-900 h-full">
         <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            style={{ backgroundColor: "inherit" }}
         >
            <Menu.Item
               key="1"
               icon={<HomeOutlined style={{ color: "#fff" }} />}
            >
               <Link href="/">ទំព័រដើម </Link>
            </Menu.Item>
            <Menu.Item
               key="2"
               icon={<UserOutlined style={{ color: "#fff" }} />}
            >
               <Link href="/document/add">បង្កើតឯកសារថ្មី </Link>
            </Menu.Item>
            <Menu.Item
               key="3"
               icon={<ContainerOutlined style={{ color: "#fff" }} />}
            >
               <Link href="/report">របាយការណ៍ </Link>
            </Menu.Item>
            <Menu.Item
               key="4"
               icon={<UserOutlined style={{ color: "#fff" }} />}
            >
               <Link href="/user/add">បង្កើតអ្នកប្រើប្រាស់ </Link>
            </Menu.Item>
            <Menu.Item
               key="5"
               icon={<ContainerOutlined style={{ color: "#fff" }} />}
            >
               <Link href="/document">ឯកសាររបស់ខ្ញុំ </Link>
            </Menu.Item>
         </Menu>

         <style global jsx>{`
            .ant-menu-inline .ant-menu-selected::after,
            .ant-menu-inline .ant-menu-item-selected::after {
               display: none;
            }
            .ant-menu-horizontal {
               border-bottom: 0px !important;
            }

            .ant-menu-item {
               display: block !important;
               height: 5rem !important;
               margin: 0 !important;
               padding: 10px !important;
            }

            .ant-menu-horizontal > .ant-menu-item a {
               color: #fff !important;
            }

            .ant-menu-item a {
               color: #fff !important;
            }

            .ant-menu-item span:nth-child(1) {
               font-size: 1.5rem !important;
               padding-top: 5px;
               display: flex;
               flex-direction: column;
               align-items: center;
            }

            .ant-menu-item .ant-menu-item-icon + span,
            .ant-menu-submenu-title .ant-menu-item-icon + span,
            .ant-menu-item .anticon + span,
            .ant-menu-submenu-title .anticon + span {
               margin-left: 0px !important;
            }

            .ant-menu-item span:nth-child(2) {
               display: block;
               text-align: center !important;
            }

            .ant-menu-item span img {
               margin-top: 1rem;
               margin-bottom: -5px;
            }

            .ant-menu-item-active:hover {
               background-color: rgba(255, 0, 0, 0.2);
            }

            .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
               background-color: rgba(255, 0, 0, 0.2);
            }
         `}</style>
      </div>
   );
};

export default Sidebar;
