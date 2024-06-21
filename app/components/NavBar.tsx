import React from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { FaTruck } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import Link from 'next/link';


const NavBar = () => {
    return (
        <section className="bg-white pl-8  lg:max-w-8xl mx-auto h-24 flex gap-x-16 items-center">
           <Link href="/"> <h1 className='tracking-tight text-gray-950 text-3xl font-semibold lg:text-4xl'>TopShop</h1>
           </Link> <div className='h-[38px] w-6/12 border border-sky-200 hidden lg:flex place-items-center p-4 rounded-lg'>
           <IoSearchOutline size={22} />
           <input type="text" placeholder='Search Product by Name ...' className="h-8 w-96 ml-4 text-gray-800 outline-none"/>
           </div>
           <div className='hidden lg:flex cursor-pointer'>
           <FaTruck size={34} color={'black'} className='font-bold self-center' />
<div className='ml-4'>
<p className='text-gray-900'>Fast Dispatch</p>
<p className="text-slate-500">Get your order in 2-3 days</p>
</div>
           </div>
           <div className="flex items-center">
           <FiShoppingCart size={28} color={'black'}  className='self-center cursor-pointer'/>
           </div></section>
    );
}

export default NavBar;
