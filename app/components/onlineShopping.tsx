
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
] 

export default function OnlineShopping() {
  return (
    <Tabs defaultValue="buyers" className="w-[400px] mx-auto mt-16">
      <TabsList className="grid w-[200px] grid-cols-2">
        <TabsTrigger value="buyers">For Buyers</TabsTrigger>
        <TabsTrigger value="sellers">For Sellers</TabsTrigger>
      </TabsList>
      <TabsContent value="buyers">
        {/* The buyers content starts from here !*/}
        <div className="w-full mt-8">
          <div>
            <h2 className="text-4xl md:text-5xl text-center font-bold text-gray-900">
              Online shopping made easy.
            </h2>
            <p className="text-3xl md:text-4xl text-gray-500 text-center font-medium mt-2">
              Shop hundreds of products from sellers worldwide.
            </p> 
            <p className="text-start text-gray-900 text-2xl mt-4">Top Picks</p>
          </div>

          <div>

{/** 
 * Mapping of Some Sanity Products
 **/}

          </div>
        </div>
        {/* The buyers content ends here !*/}
      </TabsContent>
      <TabsContent value="sellers">
        {/* The sellers content starts from here !*/}
       <div className="w-full mt-8 flex flex-col gap-y-2">
<h2 className="text-3xl md:text-4xl font-bold text-center whitespace-nowrap text-gray-900">Sell online with ease.</h2>
<p className="text-2xl md:text-3xl text-gray-500 font-medium mt-2 text-center">
Access our global marketplace and sell your
            </p> 
            <p className="text-2xl md:text-3xl text-gray-500 text-center flex font-medium">
            Access our global marketplace and sell your
            </p> 
          <div className="flex gap-x-2 w-full mt-6">
{
  sellersDetail.map((item,index)=>{
    return (
      <div key={index} className="w-full h-auto md:w-4/12 bg-gray-100/50 p-4 gap-y-2">
        {item.symbol}
        <h3 className="text-2xl font-semibold text-gray-900">{item.title}</h3>
        <p className="text-sm text-gray-900">{item.text}</p>
      </div>
    )
  })
}
          </div>

        <button className="text-white text-sm text-center px-5 py-2.5 mt-4 bg-gray-900 hover:bg-gray-700 mx-auto self-center"><RegisterLink>Create Account</RegisterLink></button>
       </div>
        {/* The sellers content ends here !*/}
      </TabsContent>
    </Tabs>
  )
}