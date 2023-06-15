import React, { useMemo, useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";
import CartItems from '@/components/CartItems';
import { useSelector } from "react-redux";

import { makePaymentRequest } from "@/utils/api";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);


const Cart = () => {
    const [loading, setLoading] = useState(false);
    const { cartItems } = useSelector((state) => state.cart);
    const subTotal = useMemo(() => {
        return cartItems.reduce(
            (total, val) => total + val.attributes.price,
            0
        );
    }, [cartItems]);


    const handlePayment = async () => {
        try {
            setLoading(true);
            const stripe = await stripePromise;
            const res = await makePaymentRequest("/api/orders", {
                products: cartItems,
            });
            await stripe.redirectToCheckout({
                sessionId: res.stripeSession.id,
            });
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };




  return (
    <div className='w-full md:py-20 text-white'>
        <Wrapper>
            {cartItems.length > 0 && (
                <>
                {/* Heading start */}
                <div className='text-center max-w-[800px] mx-auto mt-8 md:mt-0'>
                    <div className='text-[28px] md:text-[34px] mb-5 font-semibold'>
                        Your Cart
                    </div>
                </div>
                {/* Heading end */}


            {/* Cart content start */}
            <div className='flex flex-col lg:flex-row gap-12 py-10'>
                {/* Cart items start */}
                <div className='flex-[2]'>
                    <div className='text-lg font-bold'>
                        Cart Items
                    </div>
                    {cartItems.map((item) => (
                        <CartItems key={item.id} data={item} />
                    ))}
                </div>
                {/* Cart items end */}

                {/* Summary start */}
                <div className='flex-[1]'>
                    <div className='text-lg font-bold'>
                        Summary
                    </div>
                    <div className='p-5 my-5 bg-white/[0.09] rounded-xl'>
                        <div className='flex justify-between'>
                            <div className='uppercase text-md md:text-lg font-medium text-white'>
                                Subtotal
                            </div>
                            <div className='text-md md:text-lg font-medium text-white'>
                                &#36; {subTotal.toFixed(2)}
                            </div>
                        </div>
                        <div className='text-sm md:text-md py-5 border-t mt-5'>
                            The Subtotal reflects the total price of your order, including duties and taxes, before any applicable discounts. 
                            It does not include delivery costs and international transaction fees.
                        </div>
                    </div>

                    {/* Button start */}
                    <button 
                        onClick={handlePayment} 
                        className='w-full py-4 rounded-full bg-blue-600 text-white text-xl font-semibold transaction-transform active:scale-95 mb-3 flex items-center gap-2 justify-center'
                    >
                        Checkout
                        {loading && <img src="/spinner.svg" />}
                    </button>
                    {/* Button end */}
                </div>
                {/* Summary end */}
            </div>
            {/* Cart content end */}
            </>

            )}
            



            {/* This is empty cart details start  */}

            {cartItems.length < 1 && (
                <div className= 'flex-[2] flex flex-col items-center pb-[50px] mt-12 md:mt-8 '>
                <Image src = "/empty5.jpg" width={300} height={300} className='w-[400px] md:w-300px'/>
                <span className='text-xl font-semibold text-white/[0.85]'>
                Your Shopping Bag is empty! 
                    
                </span>

                <Link
                    href="/"
                    className="py-2 px-7 rounded-full bg-white/[0.9] text-black text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
                >
                    Continue Shopping
                </Link>
                </div>
            )}

            {/* empty cart end */}


        </Wrapper>
    </div>
  );
};

export default Cart;