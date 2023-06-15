import HeroBanner from "@/components/HeroBanner";
import Wrapper from "@/components/Wrapper";
import Category from "./category/[slug]";
import { fetchDataFromApi } from "@/utils/api";

import ProductCard from "@/components/ProductCard/ProductCard";
import Image from "next/image";
import RelatedProducts from "@/components/RelatedProducts";
import Link from "next/link";

export default function Home({products}) {

    return (<main className="bg-black text-white">
        <Wrapper>
        <HeroBanner/>
            {/* Heading and paragraph section start*/}
            <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[50px]">
                <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                    Find Categories that fit Your World
                </div>
                <div className="text-md md:text-xl px-8 md:px-0">
                    Art is not what you see, but what you make others see
                </div>
            </div>
            {/* Heading and paragraph section end */}

            {/* Product Grid start */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 my-14 md:my-8 px-5 md:px-6">
                {products?.data?.map((product) => (
                    <ProductCard key={product?.id} data={product}/>
                ))}
            </div>
            {/* Product grid end */}
            <img src="/about2.jpg" className="aspect-[16/10] md:aspect-auto object-cover"/>
            
        </Wrapper>
    </main>);
}

export async function getStaticProps() {
    const products = await fetchDataFromApi('/api/products?populate=*');

    return {
        props: {products}
    }
}
