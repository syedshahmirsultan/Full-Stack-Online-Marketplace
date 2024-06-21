import Link from 'next/link';
import React from 'react';
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
const TopLevel = () => {
    return (
        <div className="w-full flex flex-col gap-y-4 lg:flex-row justify-center lg:justify-between lg:pr-8 lg:pl-8 items-center h-[56px] bg-slate-900">
            <p className='text-gray-100 text-sm lg:text-[16px]'>
            Free shipping on all orders over $50
            </p>
            <div className='hidden lg:flex lg:gap-x-[26px] lg:mr-2'>
            <RegisterLink className='text-sm text-gray-100 cursor-pointer uppercase'>Sign In</RegisterLink>
            <LoginLink className='text-sm text-gray-100 cursor-pointer uppercase'>Sign Up
            </LoginLink></div>
            
        </div>
    );
}

export default TopLevel;
