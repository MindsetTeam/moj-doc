import { Layout } from "antd";

import Header from "./Header";
import Sidebar from "./Sidebar";

const { Content, Sider } = Layout;

const GlobalLayout = ({ children }) => {
   return (
      <>
         <Layout className="h-screen" style={{ minWidth: 1280 }}>
            <Header></Header>
            <Layout>
               <Sider className="bg-red-900" width="150px">
                  <Sidebar></Sidebar>
               </Sider>
               <Content>{children}</Content>
            </Layout>
         </Layout>

         <style global jsx>{`
            .ant-layout {
               min-height: auto !important;
            }
         `}</style>
      </>
   );
};

export default GlobalLayout;
