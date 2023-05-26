
import img1 from '../../assets/images/img1.png'
import img2 from '../../assets/images/img2.png'
import img3 from '../../assets/images/img3.png'
import img4 from '../../assets/images/img4.png'

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
const Carousel = () => {
    const carouselArray=[
        {
            id:101,
            img:img1,
            title:'Exclusive Toys Store',
            offer:'Get 50% Off',
            text:'A toy or plaything is an object that is used primarily to provide entertainment. Simple examples include toy blocks, board games, and dolls. Toys are often designed for use by children, although many are designed specifically for adults and pets. Toys can provide utilitarian benefits, including physical exercise, cultural awareness, or academic education.'
        },
        {
            id:102,
            img:img2,
            offer:'Get 50% Off',
            title:'Big Toys Sale Up To 70% Off',
            text:'A toy or plaything is an object that is used primarily to provide entertainment. Simple examples include toy blocks, board games, and dolls. Toys are often designed for use by children, although many are designed specifically for adults and pets. Toys can provide utilitarian benefits, including physical exercise, cultural awareness, or academic education.'

        },
        {
            id:103,
            img:img3,
            offer:'Get 50% Off',
            title:'Toys  All Ages Of Kids',
            text:'A toy or plaything is an object that is used primarily to provide entertainment. Simple examples include toy blocks, board games, and dolls. Toys are often designed for use by children, although many are designed specifically for adults and pets. Toys can provide utilitarian benefits, including physical exercise, cultural awareness, or academic education.'
        },
       
        {
            id:104,
            img:img4,
            offer:'Get 50% Off',
            title:'Toy For Kids',
            text:'A toy or plaything is an object that is used primarily to provide entertainment. Simple examples include toy blocks, board games, and dolls. Toys are often designed for use by children, although many are designed specifically for adults and pets. Toys can provide utilitarian benefits, including physical exercise, cultural awareness, or academic education.'
        },
       

    ]

    

    return (
        <div className='bg-[#e4e8e9] '>
<div className='w-[90%] mx-auto'>
             <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-auto"
      >
        {
            carouselArray.map(carousel=><SwiperSlide key={carousel.id}>

                 <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-10 py-10 md:py-28'>
                 <img src={carousel.img} alt="" />
                 <div>
                    <h1 className='text-2xl md:text-4xl bg-red-600 w-max text-white px-3 py-2 rounded-lg'>{carousel.offer}</h1>
                    <h1 className='text-5xl font-serif mt-5 md:mt-10 font-semibold'>{carousel.title}</h1>
                    <p className='mt-5'>{carousel.text}</p>
                   <div className='flex gap-5'>
                   <button className='hover:bg-white text-lg px-8 py-2 rounded-3xl mt-5 md:mt-10 bg-[#115c6f] text-white hover:text-[#115c6f] '>PURCHASE</button>
                   <button className='bg-white text-lg px-8 py-2 rounded-3xl mt-5 md:mt-10 hover:bg-[#115c6f] hover:text-white text-[#115c6f] '>SEE MORE</button>
                   </div>
                 </div>
                 </div>
                </SwiperSlide>)
        }
        
      </Swiper>
        </div>
        </div>
        
    );
};

export default Carousel;