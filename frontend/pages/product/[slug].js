import React, { useState } from 'react'
import { IoMdHeartEmpty } from "react-icons/io";
import Wrapper from "@/components/Wrapper";
import ProductDetailsCarousel from '@/components/ProductDetailsCarousel';
import RelatedProducts from '@/components/RelatedProducts';
import { fetchDataFromApi } from "@/utils/api";
import { getDiscountedPricePercentage } from "@/utils/helper";
import ReactMarkdown from "react-markdown";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const ProductDetails = ({product, products}) => {

    const p = product?.data?.[0]?.attributes;
    const [selectedSize, setSelectedSize] = useState();
    const [showError, setShowError] = useState(false);
    const dispatch = useDispatch();

    const notify = () => {
        toast.success("successfully added to cart!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };

  return (
    <div className='w-full md:py-8 text-white'>
        <ToastContainer />
        <Wrapper>
            <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]'>

                {/* Left column start */}
                <div className='w-full md:w-auto flex-[1.5] max-w-[550px] lg:max-w-full'>
                    <ProductDetailsCarousel images={p.image.data}/>
                </div>
                {/* Left column end */}



                {/* Right column start */}
                <div className='flex-[1] py-3'>
                    {/* Product title */}
                    <div className='text-[34px] font-bold mb-5 leading-tight'>
                        {p.name}
                    </div>

                    {/* Product Subtitle */}
                    <div className='text-md mb-5'>
                        {p.subtitle}
                    </div>

                    {/* Product price */}
                    <div className="flex items-center pt-6">
                            <p className="mr-2 text-lg font-semibold ">
                                USD : &#36; {p.price} 
                            </p>
                            {p.original_price && (
                                <>
                                    <p className="text-base  font-medium line-through">
                                        &#36; {p.original_price}
                                    </p>
                                    <p className="ml-auto text-base font-medium text-green-500">
                                        {getDiscountedPricePercentage(
                                            p.original_price,
                                            p.price
                                        )}
                                        % off
                                    </p>
                                </>
                            )}
                        </div>
                    {/* <div className='text-lg font-semibold pt-6'>
                        &#36;{p.price}
                    </div> */}
                    <div className='text-md font-medium text-white/[0.5]'>
                        Incl. of taxes
                    </div>
                    <div className='text-md font-medium text-white/[0.5] mb-10'>
                        {`(Also includes all applicable duties)`}
                    </div>


                    {/* Product size chart start */}
                    <div className='mb-10'>
                        {/* Heading start */}
                        <div className='flex justify-between mb-2'>
                            <div className='text-md font-semibold'>
                                Select Size :
                            </div>
                            <div className='text-md font-medium text-white/[0.5] cursor-pointer'>
                                Size Guide
                            </div>
                        </div>
                        {/* Heading end */}


                        {/* Size selection start */}
                        <div id = "sizesGrid" className='grid grid-cols1 gap-3'>
                            {p.size.data.map((item, i) => (
                                <div key={i} className={`rounded-md text-center py-3 font-medium ${
                                    item.enabled
                                        ? "bg-white/[0.09] hover:bg-zinc-700 cursor-pointer"
                                        : "cursor-not-allowed bg-white/[0.1] opacity-50"
                                    } ${selectedSize === item.size ? "border-white border" : ""}`}
                                    onClick={() => {
                                        setSelectedSize(item.size)
                                        setShowError(false)
                                    }}
                                >
                                    {item.size}
                                    <div className=' text-white/[0.6]'>
                                        {item.sizesubtitle}
                                    </div>
                                </div>
                            ))}
                            {/* <div className='cursor-pointer rounded-md text-center py-3 font-medium bg-white/[0.09] hover:bg-zinc-700'>
                                    M
                                <div className=' text-white/[0.6]'>
                                    (17.7'' / 12.6'')
                                </div>
                            </div>
                            <div className='cursor-pointer rounded-md text-center py-3 font-medium bg-white/[0.09] hover:bg-zinc-700'>
                                L
                                <div className=' text-white/[0.6]'>
                                    (26.6'' / 18.9'')
                                </div>
                            </div>
                            <div className='cursor-pointer rounded-md text-center py-3 font-medium bg-white/[0.09] hover:bg-zinc-700'>
                                XL
                                <div className=' text-white/[0.6]'>
                                    (35.4'' / 25.2'')
                                </div>
                            </div> */}
                        </div>
                        {/* Size selection end */}


                        {/* show error start */}
                        {showError && <div className='text-red-600 mt-1'>
                            Size selection is required
                        </div>}
                        {/* show error end */}

                    </div>
                    {/* Product size chart end */}


                    {/* Add to cart button start */}
                    <button className='w-full py-4 rounded-full bg-blue-600 text-white text-lg font-semibold transition-transform active:scale-95 mb-3 hover:opacity-75'
                        onClick={() => {
                            if(!selectedSize) {
                                setShowError(true);
                                document.getElementById("sizesGrid").scrollIntoView({
                                    block: "center",
                                    behavior: "smooth"
                                });
                            }  else {
                                dispatch(
                                    addToCart({
                                        ...product?.data?.[0],
                                        selectedSize,
                                        oneQuantityPrice: p.price,
                                    })
                                );
                                notify();
                            }
                        }}
                    >
                        &#36; {p.price} ● Add to Cart
                    </button>
                    {/* Add to cart button start */}

                    {/* Wishlist button start */}
                    <button className='w-full py-3 rounded-full border border-white/[0.7] text-lg font-semibold trasition-transform active:scale-95 flex items-center justify-center gap-2  hover:text-red-500/80 hover:border-white/[0.3] mb-[80px]'>
                        Wishlist
                        <IoMdHeartEmpty size={20}/>
                    </button>
                    {/* Wishlist button end */}

                    
                    <div>
                        <div className='text-lg font-bold mb-5'>
                            Product Details
                        </div>
                        <div className="markdown text-md mb-5">
                                <ReactMarkdown>{p.description}</ReactMarkdown>
                        </div>
                        {/* <div className='text-md mb-5'>
                            Apocalypse : The End is a high quality 3D Dgital Art. Artstore is a one-of-a-kind metal poster designed to capture your unique passions. 
                            Sturdy, magnet mounted, and durable.
                            Safe Wall Magnet mounting system which majorly decreases the risk of damaging the wall.
                        </div>
                        <div className='text-md mb-5'>
                            Apocalypse : The End which convey the story of a warrior, who is fighting among zombies for survival. 
                            It is created by using Blender, Photoshop, Lightroom.
                        </div> */}
                    </div>

                    
                </div>
                {/* Right column end */}
            </div>

            
            <RelatedProducts products = {products}/>

        </Wrapper>
    </div>
  )
}

export default ProductDetails;

export async function getStaticPaths() {
    const products = await fetchDataFromApi("/api/products?populate=*");

    const paths = products?.data?.map((p) => ({
        params: {
            slug: p.attributes.slug,
        },
    }));

    return {
        paths,
        fallback: false,
    };
};


export async function getStaticProps({params: {slug}}) {
    const product = await fetchDataFromApi(`/api/products?populate=*&filters[slug][$eq]=${slug}`);
    const products = await fetchDataFromApi(`/api/products?populate=*&[filters][slug][$ne]=${slug}`);

    return {
        props: {
            product,
            products,
        },
    };
}