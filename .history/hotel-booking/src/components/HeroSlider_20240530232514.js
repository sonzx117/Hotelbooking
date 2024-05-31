import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css'
import 'swiper/css/effect-fade'

import { EffectFade, Autoplay } from 'swiper';

import Img1 from '../assets/img/heroSlider/1.jpg'
import Img2 from '../assets/img/heroSlider/2.jpg'
import Img3 from '../assets/img/heroSlider/3.jpg'
  
const slides = [
  {
    title: 'Your Luxury Hotel For Vacation',
    bg: Img1,
    btnText: 'Room & Suites',
  },
  {
    title: 'Your Luxury Hotel For Vacation',
    bg: Img2,
    btnText: 'Room & Suites',
  },
  {
    title: 'Your Luxury Hotel For Vacation',
    bg: Img3,
    btnText: 'Room & Suites',
  },
];

const HeroSlider = () => {
  return <Swiper className='heroSlider h-[600px] lg:h-[860px] bg-black'>
    {slides.map((slide, index) => {

      const { title, bg, btnText } = slide;
      return (
        <SwiperSlide className='h-full bg-pink-400 relative flex justify-center items-center' key={index}>
          <div className='z-20 text-white text-center'>
            <div className='uppercase font-tertiary tracking-[6px] mb-5'>Just enjoy and relax</div>
            <h1 className='text-[32px] font-primary uppercase tracking-[2px]
             max-w-[920px] lg:text-[68px] leading-tight mb-6'>{title}</h1>
            <button className='btn btn-primary btn-lg mx-auto'>{ btnText}</button>
          </div>
          <div className='absolute top-0 w-full h-full'>
            <img src={slide.bg} alt="" className='object-cover h-full w-full' />
          </div>
          {/* {overlay} */}
          <div className='absolute w-full h-full bg-black/70'></div>

        </SwiperSlide>
      )
    })}
  </Swiper>;
};

export default HeroSlider;
