import React from 'react';
//Link

import { Link } from "react-router-dom";
//icons

import {BsArrowsFullscreen, BsPeople} from 'react-icons/bs'


const Room = ({ room }) => {
  const {id,name,image, size, maxPerson, description, price} = room
  return <div className='bg-white shadow-2xl min-h-[500px] group'>
    {/* Image */}
    <div className='overflow-hidden'>
      <img className='group-hover:scale-110 transition-all duration-300 w-full' src={image} alt=""  />
    </div>
    {/* Detail */}
    <div className='bg-white shadow-lg max-w-[300px] mx-auto h-[60px] -translate-y-1/2 flex
     justify-center items-center uppercase font-tertiary tracking-[1px] font-semibold text-base'>
      <div className='flex justify-between w-[80%]'>
        {/* SIze */}
        <div className='flex items-center gap-x-2'>
        <div className='text-accent'>
          <BsArrowsFullscreen className='text-[18px]'/>
        </div>
          <div className='flex gap-x-1'>
            <div>Size</div>
            <div>{size}m2</div>
        </div>
       </div>
      </div>
      {/* Room capacity */}
      <div>people</div>
    </div>
  </div>;
};

export default Room;
