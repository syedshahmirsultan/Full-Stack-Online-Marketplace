"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
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
        <div className='absolute w-full h-full bg-black/70 top-0 bottom-0 left-0 flex items-center justify-center right-0 md:inset-0'>
        <div className=" p-12 md:p-1 w-full md:w-6/12 h-2/4 absolute bg-white border border-white shadow-sm rounded-lg flex flex-col justify-center">
        <h2 className="text-2xl tracking-widest">SUMMER SALE </h2>
        
        </div>
        </div>

            </div>
            
        </div>
    );
}

export default Hero;
