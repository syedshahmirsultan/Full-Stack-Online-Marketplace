"use client"
import React, { useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { FaTruck } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import Link from 'next/link';
import { MdKeyboardArrowDown } from "react-icons/md";
import HamBurger from './HamBurger';


const NavBar:React.FC = () => {
    const [collectionIsOpen, setCollectionIsOpen] = useState(false);
    const [featuredSellerIsOpen, setFeaturedSellerIsOpen] = useState(false);
    return (
        <section>
        <div className='bg-white flex flex-row lg:flex-col'>
            <div className="pl-8 pb-[60px] pt-[60px] lg:max-w-8xl h-24 flex gap-x-16 items-center">
                <Link href="/">
                    <h1 className='tracking-tight text-gray-950 text-3xl font-semibold lg:text-4xl'>TopShop</h1>
                </Link>
                <div className='h-[38px] w-6/12 border border-blue-100/60 hidden lg:flex place-items-center p-4 rounded-lg'>
                    <IoSearchOutline size={22} />
                    <input type="text" placeholder='Search Product by Name ...' className="h-8 w-full ml-4 text-gray-800 outline-none" />
                </div>
                <div className='hidden lg:flex cursor-pointer'>
                    <FaTruck size={34} color={'black'} className='font-bold self-center' />
                    <div className='ml-4'>
                        <p className='text-gray-900'>Fast Dispatch</p>
                        <p className="text-slate-500">Get your order in 2-3 days</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <FiShoppingCart size={28} color={'black'} className='self-center cursor-pointer' />
                </div>
            </div>
            <div className="hidden lg:flex h-[1px] w-full bg-slate-200"></div>
            <div className="hidden lg:flex ml-8 items-center h-12 lg:gap-x-8">
                <button type="button" className='p-2 hover:bg-gray-100/50'>
                    <Link href="/products" className='text-sm text-gray-900 font-semibold'>Products</Link>
                </button>

                <div className="cursor-pointer"
                    onMouseEnter={() => setCollectionIsOpen(true)}
                    onMouseLeave={() => setCollectionIsOpen(false)}>

                    <button type="button" className="flex items-center p-2 relative hover:bg-gray-100/50 text-sm text-gray-900 font-semibold">
                        Collections <MdKeyboardArrowDown size={18} className={`ml-1 ${collectionIsOpen ?"rotate-0":"rotate-180"} duration-75`} />
                    </button>
                    {collectionIsOpen && (
                        <div className="p-8 left-4 flex gap-x-8 h-72 mt-1 rounded-lg w-84 bg-white absolute border-2 border-gray-50 shadow-xl z-50">
                            <div className='p-8 bg-gray-100/40 shadow-sm border border-gray-100/50 rounded-lg w-[40%] h-full flex flex-col items-center justify-center'>
                                <h3 className='text-gray-950 font-medium text-md'>Here to Help</h3>
                                <p className='text-sm text-gray-500'>Contact our Customer support team 24/7</p>
                            </div>
                            <div className='flex flex-col gap-y-1 h-full w-[60%] pr-8'>
                                <Link href="">
                                    <div className='hover:bg-gray-100/50 p-4'>
                                        <h3 className='text-sm text-gray-900 font-semibold'>New Arrivals</h3>
                                        <p className='text-xs text-gray-500'>Shop our new arrivals and exclusive collections</p>
                                    </div>
                                </Link>
                                <Link href="">
                                    <div className='hover:bg-gray-100/50 p-4'>
                                        <h3 className='text-md text-gray-900 font-semibold'>Sport</h3>
                                        <p className='text-sm text-gray-500'>Discover our new sports range</p>
                                    </div>
                                </Link>
                                <Link href="">
                                    <div className='hover:bg-gray-100/50 p-4 mb-8'>
                                        <h3 className='text-md text-gray-900 font-semibold'>Summer Sale</h3>
                                        <p className='text-sm text-gray-500'>Grab a bargain with our summer sale</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>

                <div className="cursor-pointer"
                    onMouseEnter={() => setFeaturedSellerIsOpen(true)}
                    onMouseLeave={() => setFeaturedSellerIsOpen(false)}>
                    <button type="button" className="flex items-center p-2  rounded-lg relative hover:bg-gray-100/50 text-sm text-gray-900 font-semibold">
                        Featured Sellers <MdKeyboardArrowDown size={18} className={`ml-1 ${featuredSellerIsOpen ?" rotate-180":" rotate-0"} duration-75` }/>
                    </button>
                    {featuredSellerIsOpen && (
                        <div className="absolute ml-4 rounded-lg shadow-md mt-1 left-0 h-80  w-6/12 bg-white gap-y-4 flex flex-col border border-gray-100 z-50">
                            <div className="flex justify-between p-4">
                                <Link href="">
                                    <div className='hover:bg-gray-100/50 p-4'>
                                        <h3 className='text-gray-950 font-medium text-md'>Tim's Toys</h3>
                                        <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </Link>
                                <Link href="">
                                    <div className='hover:bg-gray-100/50 p-4'>
                                        <h3 className='text-gray-950 font-medium text-md'>James jackpots</h3>
                                        <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="flex justify-between p-4">
                                <Link href="">
                                    <div className='hover:bg-gray-100/50 p-4'>
                                        <h3 className='text-gray-950 font-medium text-md'>Dave's Deals</h3>
                                        <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </Link>
                                <Link href="">
                                    <div className='hover:bg-gray-100/50 p-4 mb-8'>
                                        <h3 className='text-gray-950 font-medium text-md'>Tim's Trainer</h3>
                                        <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
<div className='flex items-center ml-12'>
          <HamBurger/> 
          </div>
        </div>
        <div className="bg-blue-900 h-16 w-full flex items-center justify-center border-b-2 border-white">
                <text className="text-sm md:text-[16px] text-white">New summer sale - limited time only!</text>
            </div></section>
    );
}

export default NavBar;
