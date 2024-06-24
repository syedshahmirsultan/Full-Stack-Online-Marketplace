"use client"
import React, { useState } from 'react';
import Pagination from './Pagination';
import singleProductType from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { urlForImage } from '@/sanity/lib/image';


const Products = ({ allProductsDetail } :{allProductsDetail :Array<singleProductType>}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const totalPages = Math.ceil(allProductsDetail.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedProducts = allProductsDetail.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="w-full mt-10 mb-20">
        <div className="grid m-4 md:m-0 grid-cols-1 w-full md:gap-x-4 gap-y-10 md:grid-cols-3">
    {
    selectedProducts.slice(1,7).map((item:singleProductType)=>{
        return (
           <Link key={item.slug.current} href=""> <div  className='flex flex-col gap-y-1 bg-white shadow-xs w-full  rounded-lg h-84'>
            <Image src={urlForImage(item.image[0])} width={300} height={300} alt={item.productname} className="w-full h-[270px]"/> 
            <h2 className="text-start font-bold text-lg text-gray-900">{item.productname}</h2>
            <p className='text-gray-950 text-md font-semibold'>${item.price}</p>
            </div></Link>
        )
    })
    }
            
        </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Products;
