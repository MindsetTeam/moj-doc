import Card from "@/components/Home/Card";

const CardContainer = () => {
   return (
      <>
         <div className="flex">
            <div className="w-1/2 mr-5">
               <Card color="red" count={1500} text="ឯកសារចូល"></Card>
            </div>
            <div className="w-1/2">
               <Card color="blue" count={1500} text="ឯកសារចេញ"></Card>
            </div>
         </div>

         <div className="flex">
            <div className="w-1/2 mr-5">
               <Card color="green" count={500} text="ឯកសារបណ្ដឹង"></Card>
            </div>
            <div className="w-1/2">
               <Card color="purple" count={500} text="ឯកសារសម្ងាត់"></Card>
            </div>
         </div>
      </>
   );
};

export default CardContainer;
