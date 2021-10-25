import Head from "next/head";

import CardContainer from "@/page-components/Home/CardContainer";
import DocumentList from "@/page-components/Home/DocumentList";

export default function Home() {
   return (
      <div>
         <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <div className="p-4 h-full">
            <CardContainer></CardContainer>
            <DocumentList></DocumentList>
         </div>
      </div>
   );
}
