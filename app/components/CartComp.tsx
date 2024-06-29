"use client"
import { typeOfCart } from '@/lib/drizzle';
import singleProductType, { allProductsType } from '@/types';
import { KindeUser } from '@kinde-oss/kinde-auth-nextjs/types';
import React, { useEffect, useState } from 'react';
import { handleDelete, productFromIdCart } from './utils/apiCalling';
import Link from 'next/link';
import { urlForImage } from '@/sanity/lib/image';
import { Trash2, ClockIcon } from 'lucide-react';
import Image from 'next/image';
import Pricing from './Pricing';
import Quantity from './Quantity';

const CartComp = ({ data, user }: { data: typeOfCart[], user: KindeUser }) => {
    const [productData, setProductData] = useState<singleProductType[]>([]);

    useEffect(() => {
        if (data.length > 0) {
            dataGetter();
        } else {
            setProductData([]);
        }
    }, [data]);

    const dataGetter = async () => {
        const productPromise = data.map((item) => productFromIdCart(item.productid));

        try {
            const products = await Promise.all(productPromise);

            const validProductData: singleProductType[] = products.map((item) => ({
                price: item.result[0]?.price,
                productname: item.result[0]?.productname,
                sellername: item.result[0]?.sellername,
                slug: item.slug,
                descriptionText: item.result[0]?.descriptionText,
                image: item.result[0]?.image,
                _id: item.result[0]?._id,
            }));

            setProductData(validProductData);
        } catch (error) {
            console.error("Error fetching product data:", error);
        }
    };

    if (data.length === 0) {
        return (
            <div className="w-full md:max-w-6xl md:mx-auto mt-20">
                <div className="h-80 bg-gray-100/50 rounded-md w-full p-8 md:p-2 flex flex-col gap-y-4 items-center justify-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-950">Your Cart is Empty</h2>
                    <Link href="/products" className="mt-4">
                        <button className="bg-gray-950 w-40 h-12 p-2 rounded-md text-white font-semibold text-sm">
                            Start Shopping
                        </button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <section className="lg:ml-20 ml-2 lg:mb-60 mb-80 w-full p-4 md:max-w-6xl">
            <h1 className="text-slate-800 font-bold text-3xl mx-auto flex justify-center lg:justify-start mb-12 mt-12">
                Shopping Cart
            </h1>
            <div className="grid lg:grid-cols-2 gap-4">
                {productData.map((item, index: number) => (
                    <div key={index} className="flex flex-col gap-4 border rounded-lg p-4 relative">
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg lg:text-xl text-slate-800 font-bold">
                                {item.productname}
                            </h2>
                            <Trash2
                                size={24}
                                color={'red'}
                                onClick={() => handleDelete(user?.id as string, item._id)}
                                className="cursor-pointer"
                            />
                        </div>
                        <div className="flex justify-between items-center">
                            <Image
                                src={urlForImage(item.image[0])}
                                width={150}
                                height={70}
                                alt="Product Image"
                                className="object-cover"
                            />
                            <Quantity data={data[index]} item={item} user={user}/>
                        </div>
                        <p className="text-lg text-gray-900 font-extrabold ml-2">
                            ${item.price}
                        </p>
                        <div className="flex justify-between items-center flex-wrap">
                            <div className="flex items-center">
                                <ClockIcon size={16} className="mr-1 text-blue-800" />
                                <p className="text-md text-blue-700 font-bold">Estimated Delivery:</p>
                                <p className="text-md text-gray-950 font-semibold ml-1">5 Working Days</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Pricing productData={productData} data={data} />
        </section>
    );
};

export default CartComp;
