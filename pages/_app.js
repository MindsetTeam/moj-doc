import "tailwindcss/tailwind.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

import GlobalLayout from "@/components/layout/GlobalLayout";

function MyApp({ Component, pageProps }) {
   return (
      <>
         <GlobalLayout>
            <Component {...pageProps} />
         </GlobalLayout>
      </>
   );
}

export default MyApp;
