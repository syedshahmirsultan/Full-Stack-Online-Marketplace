import React from 'react';

const TopLevel = () => {
    return (
        <div className="w-full flex flex-col gap-y-4 lg:flex-row lg:justify-between lg:pr-8 lg:pl-8 lg:items-center h-[56px] bg-slate-900">
            <p className='text-gray-100 text-md'>
            Free shipping on all orders over $50
            </p>
            <div className='flex gap-x-8'>
            <text className='text-md text-gray-100 cursor-pointer'>SignIn</text>
            <text className='text-md text-gray-100 cursor-pointer'>SignUp</text>
            </div>
            
        </div>
    );
}

export default TopLevel;
