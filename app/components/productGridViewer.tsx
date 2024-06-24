import singleProductType from '@/types';
import React from 'react';
import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/image';
import Link from 'next/link';

const ProductGridViewer = ({productsDetail}:{productsDetail:Array<singleProductType>}) => {
    return (
        <div className="w-full mt-10">
        <div className="grid m-4 md:m-0 grid-cols-1 w-full md:gap-x-4 md:gap-y-6 md:grid-cols-3">
    {
    productsDetail.slice(0,6).map((item:singleProductType)=>{
        return (
           <Link key={item.slug.current} href=""> <div  className='flex flex-col gap-y-2'>
            <Image src={urlForImage(item.image[0])} width={120} height={120} alt={item.productname}/> 
            <h2 className="text-start font-medium text-md text-gray-900">{item.productname}</h2>
            <p className='text-gray-900 text-sm'>${item.price}</p>
            </div></Link>
        )
    })
    }
            
        </div></div>
    );
}

export default ProductGridViewer;
