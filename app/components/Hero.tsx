"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'


const images =["/images/image0.png","/images/image1.png","/images/image2.png"];

const Hero:React.FC = () => {
const [currentImageIndex,setCurrentImageIndex] = useState<any>(0)

useEffect(() => {
  const timer = setTimeout(() => {
    setCurrentImageIndex((i: number)=> (i == images.length -1 ? 0 :i+1))
  }, 9000);

  return () => clearInterval(timer)
}, [currentImageIndex]);
    return (
        <div className='mb-4'>
            <div className='relative'>
            <div 
            key={currentImageIndex}
            className='relative w-full h-[500px]'>
            <Image alt="Hero Image" src={images[currentImageIndex]} width={1000} height={500} 
            className='object-cover w-full h-[500px]' />

            </div>
        <div className='absolute w-full h-full bg-black/70 top-0 bottom-0 left-0 flex items-center justify-center right-0 inset-20 md:inset-0'>
        <div className=" p-6 m-3 md:m-0 md:p-1 w-full h-auto md:w-6/12 md:h-2/4  md:absolute bg-white border gap-y-4 border-white shadow-sm rounded-lg flex flex-col items-center">
        <h2 className="text-md tracking-widest font-medium mt-8 text-gray-900 ">SUMMER SALE </h2>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Save up to 50% on our entire range</h1>
        <p className="text-md text-gray-900">Over 100 products discounted</p>
        <Link href="/products"><button className="px-5 py-3 bg-gray-900 text-center border border-gray-900 text-white font-semibold hover:bg-gray-700 text-sm rounded-lg ">
          Shop Now
        </button></Link>
        
        </div>
        </div>

            </div>
            
        </div>
    );
}

export default Hero;
