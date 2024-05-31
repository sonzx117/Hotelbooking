import React from 'react';
//Link

import { Link } from "react-router-dom";
//icons

import {BsArrowsFullscreen, BsPeople} from 'react-icons/bs'


const Room = ({ room }) => {
  const {id,name,image, size, maxPerson, description, price} = room
  return <div className='bg-white shadow-2xl min-h-[500px] group'>
    <div className='overflow-hidden'>
      <img className='group-hover:scale-110 transition-all duration-300 w-full' src={image} alt=""  />
    </div>
  </div>;
};

export default Room;
