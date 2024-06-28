
"use client"
import React, { useState, useEffect } from 'react';
import allProducts, { ProductFilterByDaveName, ProductFilterByJamesName, ProductFilterByJoshName, ProductFilterByTimsName } from '../components/utils/apiCalling';
import singleProductType, { allProductsType } from '@/types';
import ProductsList from '../components/ProductsList';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import ProductGridViewer from '../components/productGridViewer';

const Products = () => {
  const [products, setProducts] = useState<allProductsType | null>(null);
  const [timsProducts, setTimsProducts] = useState<allProductsType | null>(null);
  const [jamesProducts, setJamesProducts] = useState<allProductsType | null>(null);
  const [daveProducts, setDaveProducts] = useState<allProductsType | null>(null);
  const [joshProducts, setJoshProducts] = useState<allProductsType | null>(null);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const allProds = await allProducts();
      setProducts(allProds);
      const timsProds = await ProductFilterByTimsName();
      setTimsProducts(timsProds);
      const jamesProds = await ProductFilterByJamesName();
      setJamesProducts(jamesProds);
      const daveProds = await ProductFilterByDaveName();
      setDaveProducts(daveProds);
      const joshProds = await ProductFilterByJoshName();
      setJoshProducts(joshProds);
    };

    fetchProducts();
  }, []);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      <div className="w-full m-4 lg:max-w-7xl mx-auto space-y-4 pb-8 bg-white border border-gray-300 rounded-lg">
        <Image src="/images/products.png" alt="products page image" width={1000} height={200} className='w-full h-40 object-cover' />
        <h1 className="text-gray-900 font-bold p-3 text-2xl ml-2 lg:ml-6 md:text-3xl">Products</h1>
        <p className='text-gray-700 text-md p-3 ml-2 lg:ml-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        {showMore && (
          <p className="ml-2 lg:ml-6 mt-4 p-3 text-gray-700 text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in <br /><br /> voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida.</p>
        )}
        <button onClick={handleShowMore} className='lg:ml-6 ml-2 rounded-lg px-4 py-2 bg-gray-100/50 text-gray-900 font-semibold text-md'>
          Show {showMore ? 'less' : 'more'}
        </button>
      </div>

      <div className='flex flex-cols md:hidden mt-20'>
        {products && <ProductsList allProductsDetail={products.result} />}
      </div>

      <div className='hidden md:flex md:flex-col md:max-w-7xl md:mx-auto md:mt-20'>
        <h2 className="mt-16 text-gray-950 font-bold text-5xl text-center">Filters</h2>
        <Tabs defaultValue="allProducts" className="w-full px-3 py:1.5 m-2 ml-2 md:ml-4 mt-10">
          <TabsList className="hidden md:grid w-[600px] p-6 bg-gray-100 mx-auto md:grid-cols-5">
            <TabsTrigger value="allProducts" className="whitespace-nowrap px-3 py-1.5  focus:bg-white font-bold text-gray-950">All Products</TabsTrigger>
            <TabsTrigger value="tims" className="whitespace-nowrap font-bold px-3 py-1.5 focus:bg-white text-gray-950">Tims</TabsTrigger>
            <TabsTrigger value="james" className="whitespace-nowrap font-bold px-3 py-1.5 focus:bg-white text-gray-950">James</TabsTrigger>
            <TabsTrigger value="dave" className="whitespace-nowrap font-bold px-3 py-1.5 focus:bg-white text-gray-950">Dave</TabsTrigger>
            <TabsTrigger value="josh" className="whitespace-nowrap font-bold px-3 py-1.5  focus:bg-white text-gray-950">Josh</TabsTrigger>
          </TabsList>
          <TabsContent value="allProducts" className="w-full mt-20 mb-20">
            {products && <ProductsList allProductsDetail={products.result as Array<singleProductType>} />}
          </TabsContent>
        <TabsContent value="tims" className="w-full mt-20 mb-20">
            {timsProducts && <ProductGridViewer productsDetail={timsProducts.result as Array<singleProductType>} />}
          </TabsContent>
          <TabsContent value="james" className="w-full mt-16 mb-20">
            {jamesProducts && <ProductGridViewer productsDetail={jamesProducts.result as Array<singleProductType>} />}
          </TabsContent>
          <TabsContent value="dave" className="w-full mt-20 mb-20">
            {daveProducts && <ProductGridViewer productsDetail={daveProducts.result as Array<singleProductType>} />}
          </TabsContent>
          <TabsContent value="josh" className="w-full mt-20 mb-20">
            {joshProducts && <ProductGridViewer productsDetail={joshProducts.result as Array<singleProductType>} />}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default Products;
