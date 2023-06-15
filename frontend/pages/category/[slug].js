import React, { useEffect, useState } from "react";
import Wrapper from '@/components/Wrapper'
import ProductCard from '@/components/ProductCard/ProductCard'
import { fetchDataFromApi } from '@/utils/api'

import useSWR from "swr";
import { useRouter } from "next/router";

const maxResult = 6;

const Category = ({ category, products, slug}) => {
    const [pageIndex, setPageIndex] = useState(1);
    const { query } = useRouter();

    useEffect(() => {
        setPageIndex(1);
    }, [query]);

    const { data, error, isLoading } = useSWR(
        `/api/products?populate=*&[filters][categories][slug][$eq]=${slug}&pagination[page]=${pageIndex}&pagination[pageSize]=${maxResult}`,
        fetchDataFromApi,
        {
            fallbackData: products,
        }
    );

  return (
    <div className='w-full md:py-20 text-white relative'>
        <Wrapper>
            <div className='text-center max-w-[800px] mx-auto mt-8 md:mt-0'>
                <div className='text-[20px] md:text-[34px] mb-10 font-semibold leading-tight'>
                    {category?.data?.[0]?.attributes?.name}
                </div>
            </div>

            {/* Product Grid start */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 my-15 px-14 md:px-5">
                {data?.data?.map((product) => (
                    <ProductCard key={product?.id} data={product}/>
                ))}
                
                {/* <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/> */}
            </div>
            {/* Product grid end */}

            {/* PAGINATION BUTTONS START */}
                {data?.meta?.pagination?.total > maxResult && (
                    <div className="flex gap-3 items-center justify-center mt-14 md:mt-15">
                        <button
                            className={`rounded py-2 px-4 bg-white text-black disabled:bg-white/[0.2] disabled:text-gray-300/80`}
                            disabled={pageIndex === 1}
                            onClick={() => setPageIndex(pageIndex - 1)}
                        >
                            Previous
                        </button>
                
                        <span className="font-bold">{`${pageIndex} of ${
                            data && data.meta.pagination.pageCount
                        }`}</span>

                        <button
                            className={`rounded py-2 px-4 bg-white text-black disabled:bg-white/[0.2] disabled:text-gray-300/80`}
                            disabled={
                                pageIndex ===
                                (data && data.meta.pagination.pageCount)
                            }
                            onClick={() => setPageIndex(pageIndex + 1)}
                        >
                            Next
                        </button>
                    </div>
                )}
                {/* PAGINATION BUTTONS END */}
                {isLoading && (
                    <div className="absolute top-[-40px] left-0 w-full h-full bg-black/[0.7] flex flex-col gap-5 justify-center items-center ">
                        <img src="/Artstore-logo.png" width={200} />
                        <span className="text-2xl font-medium mt-[-20px]">Loading...</span>
                    </div>
                )}

        </Wrapper>
    </div>
  )
}

export default Category;

export async function getStaticPaths() {
    const category = await fetchDataFromApi("/api/categories?populate=*");

    const paths = category?.data?.map((c) => ({
        params: {
            slug: c.attributes.slug,
        },
    }));

    return {
        paths,
        fallback: false,
    };
};
   
export async function getStaticProps({params: {slug}}) {
    const category = await fetchDataFromApi(`/api/categories?filters[slug][$eq]=${slug}`)
    const products = await fetchDataFromApi(`/api/products?populate=*&[filters][categories][slug][$eq]=${slug}&pagination[page]=1&pagination[pageSize]=${maxResult}`)

    return {
        props: {
            category,
            products,
            slug
        },
    };
}