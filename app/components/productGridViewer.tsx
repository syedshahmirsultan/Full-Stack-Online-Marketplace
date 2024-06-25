import singleProductType from '@/types';
import React from 'react';
import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/image';
import Link from 'next/link';

const ProductGridViewer = ({productsDetail}:{productsDetail:Array<singleProductType>}) => {
    return (
        <div className="w-full mt-28">
        <div className="grid p-4 md:m-0 grid-cols-1 w-full md:gap-x-4 gap-y-10 md:grid-cols-3">
    {
    productsDetail.map((item:singleProductType)=>{
        return (
           <Link key={item.slug.current} href=""> <div  className='flex flex-col gap-y-1 bg-white shadow-xs w-full  rounded-lg h-84'>
            <Image src={urlForImage(item.image[0])} width={300} height={300} alt={item.productname} className="w-full h-[270px]"/> 
            <h2 className="text-center font-bold text-xl text-gray-900">{item.productname}</h2>
            <p className='text-gray-950 text-center text-md font-bold'>${item.price}</p>
            </div></Link>
        )
    })
    }
            
        </div></div>
    );
}

export default ProductGridViewer;
