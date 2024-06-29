"use client";
import React from 'react';
import { addToCartApiCall } from './utils/apiCalling';
import { useToast } from '@/components/ui/use-toast';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';
import { FaTruck } from "react-icons/fa";
import { VscDebugRestart } from "react-icons/vsc";
import { IoCallOutline } from "react-icons/io5";
import { KindeUser } from '@kinde-oss/kinde-auth-nextjs/types';
import singleProductType from '@/types';

const BriefProduct = ({ product, user }: { product: singleProductType, user: KindeUser | null }) => {
    const { toast } = useToast();

    async function handleAddToCart() {
        if (user) {
            try {
                await addToCartApiCall(user.id, product._id);
                toast({
                    title: "Successfully",
                    description: "Added to Cart Successfully!"
                });
            } catch (error) {
                toast({
                    title: "Unsuccessfully",
                    description: "Cannot Add to Cart Successfully!",
                    variant: "destructive"
                });
            }
        } else {
            toast({
                title: "Error",
                description: "Please SignIn or SignUp first!",
                variant: "destructive"
            });
        }
    }

    return (
        <section className="w- p-6 md:p-0 md:max-w-7xl m-2 md:ml-20 mt-20 mb-40 overflow-x-hidden">
            <div className="flex flex-col md:flex-row md:gap-x-8 gap-y-2 text-center md:text-start">
                <div>
                    <Image src={urlForImage(product.image[0])} width={650} height={600} alt={product.productname} className='w-[95%] h-80 mx-auto md:w-96 md:h-96 object-fill' />
                </div>
                <div className='flex flex-col gap-y-5 mt-8'>
                    <h2 className='font-bold text-4xl'>{product.productname}</h2>
                    <p className='text-xl text-gray-600'>Sold by <span className='text-gray-800 font-bold text-xl'>{product.sellername}</span></p>
                    <text className="text-2xl font-extrabold text-gray-900">${product.price}</text>
                        
                    <button onClick={handleAddToCart} className='p-3 mt-6 bg-gray-950 w-44 h-12 text-white rounded-md text-md font-semibold'>Add to Cart</button>
                    <div className="flex gap-x-4 md:gap-x-8 mt-8">
                        <div className="flex flex-col gap-y-2">
                            <FaTruck size={34}   className="ml-1 md:ml-4"/>
                            <p className="text-md font-medium text-gray-950">Fast Dispatch</p>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <VscDebugRestart size={33}   className="ml-1 md:ml-4"/>
                            <p className="text-md font-medium text-gray-950">30 Day Returns</p>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <IoCallOutline size={33}  className="ml-1 md:ml-4"/>
                            <p className="text-md font-medium text-gray-950">24/7 Support</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 p-4 md:p-8">
                <h3 className="text-gray-900 font-bold text-xl text-start">Product Description</h3>
                <p className='text-gray-900 text-lg mt-4 p-4 text-start md:pr-20'>{product.descriptionText}</p>
            </div>
        </section>
    );
}

export default BriefProduct;
