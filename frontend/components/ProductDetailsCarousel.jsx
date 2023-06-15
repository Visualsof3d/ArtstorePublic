import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ProductDetailsCarousel = ({images}) => {
  return (
    <div className='text-white text-[20px] w-full max-w-[310px] md:max-w-[530px] mx-auto sticky top-[50px]'>
        <Carousel
            infiniteLoop={true}
            showIndicators={false}
            showStatus={false}
            thumbWidth={50}               
            className="productCarousel"
        >
            {images?.map((img) => (
              <img key={img.id} src={img.attributes.url} alt={img.attributes.name}/>
            ))}
            {/* <img src="/p-3.jpg" />
            <img src="/p-4.jpg" />
            <img src="/p-1.jpg" />
            <img src="/p-2.jpg" />
            <img src="/p-6.jpg" />
            <img src="/p-7.jpg" /> */}
        </Carousel>
    </div>
  )
}

export default ProductDetailsCarousel