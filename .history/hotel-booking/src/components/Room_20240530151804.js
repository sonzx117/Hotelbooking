import React from 'react';
//Link

import { Link } from "react-router-dom";
//icons

import {BsArrowsFullscreen, BsPeople} from 'react-icons/bs'


const Room = ({ room }) => {
  const {id,name,image, size, maxPerson, description, price} = room
  return <div>
    <div>
      <img src={image} alt="" />
    </div>
  </div>;
};

export default Room;
