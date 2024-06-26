"use client"
import singleProductType, { allProductsType } from '@/types';
import React, { useState } from 'react';
import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/image';
import { FaTruck } from "react-icons/fa";
import { VscDebugRestart } from "react-icons/vsc";
import { IoCallOutline } from "react-icons/io5";


const BriefProduct =({product}:{product:singleProductType}) => {
    const [quantity,setQuantity] = useState(1)
    return (
        <section className=" w-full p-6 md:p-0 md:max-w-8xl m-2 md:ml-20 mt-20 mb-40 overflow-x-hidden">
        <div className="flex flex-col md:flex-row md:gap-x-8 gap-y-2 text-center md:text-start"><div >
        <Image src={urlForImage(product.image[0])} width={600} height={600} alt={product.productname} className='w-[90%] h-80 mx-auto md:w-96 md:h-96 object-fill '/>
        </div>
        <div className='flex flex-col gap-y-3'>
        <h2 className='font-bold text-4xl'>{product.productname}</h2>
        <p className='text-md text-gray-600'>Sold by <span className='text-gray-700 font-bold text-md'>{product.sellername}</span></p>
        <text className="text-xl font-extrabold text-gray-900">${product.price}</text>
        <div className="flex flex-col gap-y-2">
        <p className='text-gray-700 font-bold text-lg'>Quantity</p>
   <div className="flex  w-32 h-8 bg-white border border-gray-400 rounded-lg self-center md:self-start"><input type='number'
   value={quantity}
   min={1}
   onChange={(e)=> setQuantity(parseInt(e.target.value))} 
   className='outline-none ml-2 w-[90%] h-full text-gray-900 text-md'/>
   </div>
        </div>
        <button className='p-2 mt-2 bg-gray-950 w-44 h-12 text-white rounded-md text-md font-semibold'>Add to Cart</button>
       <div className="flex gap-x-4 md:gap-x-8 mt-8">
        <div className="flex flex-col gap-y-2">
            <FaTruck size={29}/>
            <p className="text-sm font-medium text-gray-950">Fast Dispatch</p>
            </div>
            <div className="flex flex-col gap-y-2">
            <VscDebugRestart size={28}/>
            <p className="text-sm font-medium text-gray-950">30 Day Returns</p>
            </div>
            <div className="flex flex-col gap-y-2">
            <IoCallOutline size={28}/>
            <p className="text-sm font-medium text-gray-950">24/7 Support</p>
            </div></div> </div>
        </div></section>
    );
}

export default BriefProduct;
