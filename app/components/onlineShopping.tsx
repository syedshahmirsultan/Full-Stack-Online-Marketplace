import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Link from 'next/link'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { FiDollarSign } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { LuAlarmClock } from "react-icons/lu";
import { FaTruck } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import allProducts from "./utils/apiCalling";
import { allProductsType } from "@/types";
import AllProductGridViewer from "./allProductGridViewer";

// SellersDetail Array
const sellersDetail = [
  {
    symbol: <FiDollarSign size={30} />,
    title: "No monthly fees",
    text: "Fugit voluptates nihil ex et voluptas dignissimos blanditiis. Consectetur velit pariatur nihil quis nihil similique voluptatum in. Et nostrum ipsam quo magni. Velit et odit dolores."
  },
  {
    symbol: <FiUser size={30} />,
    title: "Access to millions of buyers",
    text: "Fugit voluptates nihil ex et voluptas dignissimos blanditiis. Consectetur velit pariatur nihil quis nihil similique voluptatum in. Et nostrum ipsam quo magni. Velit et odit dolores."
  },
  {
    symbol: <LuAlarmClock size={30} />,
    title: "Quick and easy setup",
    text: "Fugit voluptates nihil ex et voluptas dignissimos blanditiis. Consectetur velit pariatur nihil quis nihil similique voluptatum in. Et nostrum ipsam quo magni. Velit et odit dolores."
  }
];

// Buyers Detail Array
const buyersDetail = [
  {
    symbol: <FaTruck size={32} />,
    title: "Free Shipping",
    text: "Free shipping on all orders over $50"
  },
  {
    symbol: <IoCallOutline size={32} />,
    title: "24/7 Customer Support",
    text: "Have a question? Get in touch."
  },
  {
    symbol: <FiDollarSign size={32} />,
    title: "Best prices",
    text: "We offer the best prices on the market."
  }
]

export default async function OnlineShopping() {
  const allProductsDetail: allProductsType = await allProducts();

  return (
    <div className="max-w-8xl mx-auto">
      <Tabs defaultValue="buyers" className="w-full m-2 ml-2 md:ml-4 mt-16">
        <TabsList className="grid w-1/2 md:w-[350px] mx-auto grid-cols-2">
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
              <p className="text-start text-gray-900 font-bold text-2xl md:text-4xl mt-16">Top Picks</p>
            </div>
            <div>
              <AllProductGridViewer productsDetail={allProductsDetail.result} />
            </div>
            <div className="flex justify-center">
              <button className="text-white text-sm text-center px-7 py-3.5 mt-12 bg-gray-900 rounded-lg hover:bg-gray-700 font-medium">
                <Link href="/products">View All Products</Link>
              </button>
            </div>
            <div className="hidden md:flex bg-blue-900 md:flex-col md:items-center md:gap-y-4 mx-auto rounded-lg w-12/12 h-64 p-4 md:mt-20">
              <div className="flex flex-col gap-y-4 items-center ">
                <p className="text-white text-md font-semibold mt-4">FEATURED SELLER</p>
                <h2 className="text-3xl font-bold text-white">Tim&apos;s Terrific Toys</h2>
                <p className="text-white text-md">
                  Top seller of the month! Tim&apos;s Toys has been selling toys for 10 years and is a top rated seller on the platform.
                </p>
                <button className="text-center font-semibold mt-6 text-sm text-gray-950 hover:bg-gray-100 bg-white px-5 py-2.5 rounded-lg">Explore Sellers</button>
              </div>
            </div>
            <div className="hidden md:flex gap-x-4 mt-12">
              {
                buyersDetail.map((item, index) => {
                  return (
                    <div key={index} className="w-4/12 h-auto p-6 bg-gray-100/50 border border-gray-200/70 rounded-lg flex flex-col gap-y-2">
                      {item.symbol}
                      <h2 className="text-2xl text-gray-900 font-semibold">{item.title}</h2>
                      <p className="text-md text-gray-900">{item.text}</p>
                    </div>
                  )
                })
              }
            </div>
          </div>
          {/* The buyers content ends here !*/}
        </TabsContent>
        <TabsContent value="sellers" className="w-full p-8 mt-4 md:w-[1300px] overflow-hidden">
          {/* The sellers content starts from here !*/}
          <div className="w-full mt-8 flex flex-col gap-y-2">
            <h2 className="text-4xl md:text-5xl font-extrabold text-start ml-2 md:ml-0 md:text-center text-gray-950">Sell online with ease.</h2>
            <p className="text-2xl md:text-4xl text-gray-500 font-medium m-2 md:m-0 md:mt-2 text-start md:text-center">
              Access our global marketplace and sell your
            </p>
            <p className="text-2xl md:text-4xl text-gray-500 ml-2 md:ml-0 text-start md:text-center font-medium">
              products to over 1 million visitors.
            </p>
            <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-2 w-full mt-12">
              {
                sellersDetail.map((item, index) => {
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
            <button className="text-white text-sm text-center px-7 py-3.5 mt-8 bg-gray-900 rounded-lg hover:bg-gray-700 mx-auto self-center font-medium">
              <RegisterLink>Create Account</RegisterLink>
            </button>
          </div>
          {/* The sellers content ends here !*/}
        </TabsContent>
      </Tabs>
    </div>
  )
}
