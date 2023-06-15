import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ProductCard from "@/components/ProductCard/ProductCard";

const RelatedProducts = ({products}) => {
    const responsive = {
        desktop: {
            breakpoint: {max:3000, min:1024},
            items: 4
        },
        tablet: {
            breakpoint: {max:1023, min:464},
            items: 2
        },
        mobile: {
            breakpoint: {max:767, min:0},
            items: 1
        },
    };

  return (
    <div className='mt-[50px] md:mt-[100px] mb-[25px] md:mb-[-30px]'>
        <div className='text-2xl font-bold mb-5'>
            You Might Also Like
        </div>
        <Carousel 
            containerClass='-mx-[10px]' 
            itemClass='px-[10px]' 
            responsive={responsive}
        >
            {products?.data?.map((product) => (
                    <ProductCard key={product?.id} data={product}/>
            ))}
        </Carousel>
    </div>
  )
}

export default RelatedProducts;