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
            className='relative w-full h-[550px]'>
            <Image alt="Hero Image" src={images[currentImageIndex]} width={1000} height={500} 
            className='object-cover w-full h-[550px] -z-50' />

            </div>
        <div className='absolute w-full h-full bg-black/30 top-0 bottom-0 left-0 right-0'></div>

            </div>
            
        </div>
    );
}

export default Hero;
