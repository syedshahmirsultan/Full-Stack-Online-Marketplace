"use client";

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { allProductsType } from '@/types';
import { searchProductByName } from '../components/utils/apiCalling';
import ProductGridViewer from '../components/productGridViewer';


const SearchComponent = () => {
    const router = useRouter();
    const params = useSearchParams();
    const [productData, setProductData] = useState<allProductsType | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!params.has("query")) {
            router.push('/products');
            return;
        }

        const searchValue = params.get("query") as string;
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await searchProductByName(searchValue);
                if (response && response.result && response.result.length > 0) {
                    setProductData(response as allProductsType);
                } else {
                    setProductData(null);
                }
            } catch (error) {
                console.error("Failed to fetch products", error);
                setError("Failed to fetch products. Please try again later.");
                setProductData(null);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [params, router]);

    if (loading) {
        return <div className='text-2xl  font-bold mt-12 mb-80'>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!productData || !productData.result || productData.result.length === 0) {
        return <div className="mt-40 text-center mb-80 text-3xl lg:text-4xl font-bold ">No products found</div>;
    }

    return <ProductGridViewer productsDetail={productData.result} />;
};

const SearchPage = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SearchComponent />
        </Suspense>
    );
};

export default SearchPage;