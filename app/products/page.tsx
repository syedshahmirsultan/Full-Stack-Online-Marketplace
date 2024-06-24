import React from 'react';
import allProducts from '../components/utils/apiCalling';
import { allProductsType } from '@/types';
import ProductsList from '../components/ProductsList';

const Products = async() => {
  const allproducts:allProductsType = await allProducts()
    return (
      <div>
        <div className='w-full md:max-w-6xl mx-auto'>
          <ProductsList allProductsDetail={allproducts.result} /> 
        </div></div>
    );
}

export default Products;
