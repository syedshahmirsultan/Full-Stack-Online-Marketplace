"use client"
import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import Link from 'next/link';
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs';

const HamBurger:React.FC = () => {
    const [hamBurgerIsOpen,setHamBurgerIsOpen] = useState<boolean>(false)
    return (
        <section>
        <div className='flex lg:hidden'>
        {
            !hamBurgerIsOpen ? (<div className="p-2 border border-gray-300 rounded-lg">
<RxHamburgerMenu size={26} color={'black'} onClick={()=> setHamBurgerIsOpen(true)}/>
</div>
 )
                :  (<div className="h-96 w-full absolute  flex flex-col gap-y-2 justify-center bg-white z-50 p-8 right-0">
<RxCross2 size={20} className='top-10 text-black hover:bg-red-600 hover:text-white p-3 rounded-full right-10' onClick={()=> setHamBurgerIsOpen(false)} />

<h1 className="text-center text-gray-950 text-xl font-bold ">Menu</h1>
<div className='h-12 w-84 border border-gray-200 rounded-lg flex gap-x-4 items-center'>
<IoSearchOutline size={24} className='ml-2' />
<input type='text' placeholder='Search the Product by Name ...' className=' w-full  flex self-center outline-none text-gray-800'/>
</div>

<Link href="/products" className="text-gray-600 text-md font-semibold p-4 mt-4 hover:bg-gray-100/50">
Products</Link>
<RegisterLink className='text-md text-gray-600 cursor-pointer uppercase p-4 font-semibold hover:bg-gray-100/50'>Sign In</RegisterLink>
            <LoginLink className='text-md text-gray-600 cursor-pointer uppercase p-4 font-semibold hover:bg-gray-100/50'>Sign Up
            </LoginLink>
                </div>)
        }
        </div></section>
    );
}

export default HamBurger;
