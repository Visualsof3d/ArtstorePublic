import { getDiscountedPricePercentage } from '@/utils/helper'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const ProductCard = ({data: {attributes: p, id}}) => {
  return (
    <Link href={`/product/${p.slug}`} className='trasform overflow-hidden bg-white/[0.09] duration-200 hover:scale-105 cursor-pointer'>
          {/* <img className='w-full' src="/p-1.jpg" alt="Product Image"/> */}
            
          <Image 
              width={500}
              height={500}
              src={p.thumbnail.data.attributes.url}
              alt={p.name}
          />
          <div className='p-4 text-white/[0.9]'>
              <h2 className='text-lg font-medium'>
                  {p.name}
              </h2>
              <div className='flex items-center text-white/[0.5]'>
                  <p className='mr-2 text-lg font-semibold'>	
                  $ {p.price}</p>

                  {p.original_price && (
                    <>
                        <p className='text-base font-medium line-through'>&#36;{p.original_price}</p>
                        <p className='ml-auto text-base font-medium text-green-500'>
                          {getDiscountedPricePercentage(p.original_price, p.price)}
                          % off
                        </p>
                    </>
                  )}
              </div>
          </div>
    </Link>
    
  )
}

export default ProductCard