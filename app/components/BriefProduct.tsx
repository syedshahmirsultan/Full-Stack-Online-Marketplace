"use client"
import singleProductType, { allProductsType } from '@/types';
import React, { useState } from 'react';
import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/image';
import { FaTruck } from "react-icons/fa";
import { VscDebugRestart } from "react-icons/vsc";
import { IoCallOutline } from "react-icons/io5";


const BriefProduct = ({product}:{product:singleProductType}) => {
    const [quantity,setQuantity] = useState(1)
    return (
        <section className=" w-full p-6 md:p-0 md:max-w-7xl md:mx-auto flex flex-col md:flex md:gap-x-8 gap-y-8 mb-40">
        <div>
        <Image src={urlForImage(product.image[0])} width={400} height={400} alt={product.productname} className='w-[90%] h-80 mx-auto md:w-96 md:h-96 object-fill '/>
        </div>
        <div className='flex flex-col gap-y-8'>
        <h2 className='font-bold text-2xl'>{product.productname}</h2>
        <p className='text-sm text-gray-600'>Sold by <span className='text-gray-400'>{product.sellername}</span></p>
        <text className="text-lg font-bold textgray-900">${product.price}</text>
        <div className="flex flex-col gap-y-2">
        <p className='text-gray-700 font-semibold text-md'>Quantity</p>
   <div className="flex px-6 py-3 border-gray-200 bg-white"><input type='number'
   value={quantity} onChange={(e)=> setQuantity(parseInt(e.target.value))} 
   className='outline-none w-[90%] h-full'/>
   </div>
        </div>
        <button className='px-7 py-3.5 bg-gray-950 text-white rounded-md font-semibold'>Add to Cart</button>
       <div className="flex gap-x-4">
        <div className="flex flex-col gap-y-1">
            <FaTruck size={20} color={'black'}/>
            <p className="text-sm font-medium text-gray-900">Fast Dispatch</p>
            </div>
            <div className="flex flex-col gap-y-1">
            <VscDebugRestart size={20} color={'black'}/>
            <p className="text-sm font-medium text-gray-900">30 Day Returns</p>
            </div>
            <div className="flex flex-col gap-y-1">
            <IoCallOutline size={20} color={'black'}/>
            <p className="text-sm font-medium text-gray-900">24/7 Support</p>
            </div></div> </div>
        </section>
    );
}

export default BriefProduct;
