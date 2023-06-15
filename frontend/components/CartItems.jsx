import React from 'react'
import Image from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";
import { addToCart, updateCart, removeFromCart } from "@/store/cartSlice";
import { useDispatch } from "react-redux";

const CartItems = ({ data }) => {

    const p = data.attributes;
    const dispatch = useDispatch();
    const updateCartItem = (e, key) => {
        let payload = {
            key,
            val: key === "quantity" ? parseInt(e.target.value) : e.target.value,
            id: data.id,
        };
        dispatch(updateCart(payload));
    };


  return (
    <div className='flex py-5 gap-3 md:gap-5 border-b'>
        <div className='shrink-0 aspect-square w-[80px] md:w-[120px]'>
            <Image 
                src={p.thumbnail.data.attributes.url}
                alt={p.name}
                width={120}
                height={120}
            />
        </div>

        <div className='w-full flex flex-col'>
            <div className='flex flex-col md:flex-row justify-between'>
                <div className='text-lg md:text-2xl font-semibold text-white/[0.9]'>
                    {p.name}
                </div>

                <div className='text-xs md:text-md font-medium text-white/[0.5] block md:hidden'>
                    3D Digital Art
                </div>

                <div className='text-sm md:text-md font-bold text-white/[0.9] mt-2'>
                    USD  :  &#36; {p.price}
                </div>
            </div>

            <div className='text-md font-medium text-white/[0.5] hidden md:block mt-1'>
                3D Digital Art
            </div>

            <div className='flex items-center justify-between mt-4'>
                <div className='flex items-center gap-2 md:gap-10 text-white/[0.7] text-xs md:text-[14px]'>
                    <div className='flex items-center gap-1 mt-1 md:gap-2'>
                        <div className='font-semibold md:mt-[10px]'>Size:</div>
                        <select className='hover:text-white bg-black rounded-md px-1 py-1 md:py-1 md:mt-[10px]'
                            onChange={(e) =>
                                updateCartItem(e, "selectedSize")
                            }
                        >
                            {p.size.data.map((item, i) => {
                                return (
                                    <option 
                                        key={i} 
                                        value={item.size}
                                        disabled ={!item.enabled ? true : false}  
                                        selected={data.selectedSize===item.size}
                                    >
                                        {item.size}
                                    </option>
                                );
                            })}
                        </select>
                    </div>

                    <div className='flex items-center gap-1 mt-1 md:gap-2'>
                        <div className='font-semibold md:mt-[10px]'>Quantity:</div>
                        <select className='hover:text-white bg-black rounded-md px-2 py-1 md:py-1 md:mt-[10px]'
                             onChange={(e) => updateCartItem(e, "quantity")}
                        >
                            {Array.from(
                                    { length: 10 },
                                    (_, i) => i + 1
                                ).map((q, i) => {
                                    return (
                                        <option
                                            key={i}
                                            value={q}
                                            selected={data.quantity === q}
                                        >
                                            {q}
                                        </option>
                                    );
                            })}
                        </select>
                    </div>
                </div>
                <RiDeleteBin6Line 
                    onClick={() => dispatch(removeFromCart({ id: data.id }))} 
                    className='cursor-pointer text-white/[0.5] hover:text-white text-[16px] md:text-[20px]'
                />
            </div>
        </div>
    </div>
  );
};

export default CartItems;