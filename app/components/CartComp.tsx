"use client"
import { typeOfCart } from '@/lib/drizzle';
import singleProductType, { allProductsType } from '@/types';
import { KindeUser } from '@kinde-oss/kinde-auth-nextjs/types';
import React, { useEffect, useState } from 'react';
import { productFromIdCart } from './utils/apiCalling';
import { ShoppingBagIcon } from 'lucide-react';
import Link from 'next/link';

const CartComp = ({data,user}:{data:typeOfCart[], user:KindeUser}) => {
    const [productData, setProductData] = useState<singleProductType[]>([]);

    useEffect(() => {
        dataGetter();
      }, [data]);

async function dataGetter() {
 const productPromise = data.map((item) => {
    return productFromIdCart(item.productid);
        });
        try {
            const productData = await Promise.all(productPromise);
            setProductData(
              productData.map((item: allProductsType) => {
                return item.result[0];
              })
            );
          } catch (error) {
            console.error("Error fetching product data:", error);
          }
          if (data.length === 0) {
            return (
              <div className="h-[80vh] flex items-center justify-center flex-col gap-3 ">
                <ShoppingBagIcon color="purple" size={42} />
                <h2 className="text-2xl font-semibold text-gray-600">
                  Cart is Empty,{" "}
                  <Link href="/products" className="text-xl">
                    Browse Products
                  </Link>
                </h2>
              </div>
            );
          }
        }


      return (
        <div>
            
        </div>
    );
}

export default CartComp;
