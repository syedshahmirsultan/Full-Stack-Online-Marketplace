
import {RegisterLink} from "@kinde-oss/kinde-auth-nextjs/components";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { FiDollarSign } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { LuAlarmClock } from "react-icons/lu";



const sellersDetail = [
  { symbol:<FiDollarSign size={30} />,
    title:"No monthly fees",
    text:"Fugit voluptates nihil ex et voluptas dignissimos blanditiis. Consectetur velit pariatur nihil quis nihil similique voluptatum in. Et nostrum ipsam quo magni. Velit et odit dolores."


  },
  { symbol:<FiUser size={30} />,
  title:"Access to millions of buyers",
  text:"Fugit voluptates nihil ex et voluptas dignissimos blanditiis. Consectetur velit pariatur nihil quis nihil similique voluptatum in. Et nostrum ipsam quo magni. Velit et odit dolores."

  },
  { symbol:<LuAlarmClock size={30} />,
  title:"Quick and easy setup",
  text:"Fugit voluptates nihil ex et voluptas dignissimos blanditiis. Consectetur velit pariatur nihil quis nihil similique voluptatum in. Et nostrum ipsam quo magni. Velit et odit dolores."

  }
] ;


export default function OnlineShopping() {
  return (
    <Tabs defaultValue="buyers" className="w-full m-2 md:w-[700px] ml-2 md:ml-4 mt-16">
      <TabsList className="grid w-1/2 md:w-[350px] grid-cols-2">
        <TabsTrigger value="buyers">For Buyers</TabsTrigger>
        <TabsTrigger value="sellers">For Sellers</TabsTrigger> 
      </TabsList>
      <TabsContent value="buyers" className="w-full p-8 mt-4 md:w-[1300px] overflow-hidden">
        {/* The buyers content starts from here !*/}
        <div className="w-full mt-8">
          <div>
            <h2 className="text-4xl md:text-5xl text-start ml-2 md:ml-0 md:text-center font-extrabold text-gray-950">
              Online shopping made easy.
            </h2>
            <p className="text-2xl md:text-4xl text-gray-500 text-start ml-2 md:ml-0 md:text-center font-medium mt-2">
              Shop hundreds of products from sellers worldwide.
            </p> 
            <p className="text-start text-gray-900 font-medium text-xl  md:text-3xl mt-12">Top Picks</p>
          </div>

          <div>

{/** 
 * Mapping of Some Sanity Products
 **/}

          </div>
        </div>
        {/* The buyers content ends here !*/}
      </TabsContent>
      <TabsContent value="sellers" className="w-full p-8 mt-4 md:w-[1300px] overflow-hidden">
        {/* The sellers content starts from here !*/}
       <div className="w-full mt-8 flex flex-col gap-y-2">
<h2 className="text-4xl md:text-5xl font-extrabold text-start ml-2 md:ml-0 md:text-center text-gray-950">Sell online with ease.</h2>
<p className="text-2xl md:text-3xl text-gray-500 font-medium m-2 md:m-0 md:mt-2  text-start md:text-center">
Access our global marketplace and sell your
            </p> 
            <p className="text-2xl md:text-3xl text-gray-500 ml-2 md:ml-0 text-start md:text-center font-medium">
            products to over 1 million visitors.
            </p> 
          <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-2 w-full mt-12">
{
  sellersDetail.map((item,index)=>{
    return (
      <div key={index} className="w-full h-auto md:h-64 flex flex-col items-start justify-center bg-gray-100/50 p-6 pr-2 rounded-lg gap-y-2">
        {item.symbol}
        <h3 className="text-2xl font-semibold text-gray-900">{item.title}</h3>
        <p className="text-md text-gray-900">{item.text}</p>
      </div>
    )
  })
}
          </div>

        <button className="text-white text-sm text-center px-7 py-3.5 mt-8 bg-gray-900 rounded-lg hover:bg-gray-700 mx-auto self-center font-medium"><RegisterLink>Create Account</RegisterLink></button>
       </div>
        {/* The sellers content ends here !*/}
      </TabsContent>
    </Tabs>
  )
}