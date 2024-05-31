import React, { useContext } from 'react';

import { useParams } from 'react-router-dom';

import AdultsDropdown from '../components/AdultsDropdown';
import CheckIn from '../components/CheckIn';
import CheckOut from '../components/CheckOut';
import KidsDropdown from '../components/KidsDropdown';

import { RoomContext } from '../context/RoomContext';
import { FaCheck } from 'react-icons/fa'


const RoomDetails = () => {
  const { id } = useParams();
  const { rooms } = useContext(RoomContext);
  //get Room
  const room = rooms.find(room => {
    return room.id === Number(id);
  });

  const { name, description, facilities, imageLg, price } = room;
  return (
    <section className='bg-pink-200'>
      <div className='bg-room bg-cover bg-center h-[560px] relative flex
       justify-center items-center'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/70'></div>
        {/* title */}
        <h1 className='text-6xl text-white z-20 font-primary text-center'>
          {name} Details
        </h1>
      </div>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row h-full py-24'>
          {/* Left */}
          <div className='w-full h-full lg:w-[60%] px-6 '>
            <h2 className='h2'>{name}</h2>
            <p className='mb-8'>{description}</p>
            <img className='mb-8' src={imageLg} alt="" />
            {/* Facilities */}
            <div className='mt-12'>
              <h3 className='h3 mb-3'>Room Facilites</h3>
              <p className='mb-12'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Animi rem sunt numquam obcaecati eveniet consequatur ex, nam beatae eius
                perspiciatis dolores, accusamus fugit optio hic nemo, voluptate sint officiis
                laborum?</p>
              {/* grid */}
              <div className='gird grid-cols-3 gap-6 mb-12'>
                {facilities.map((item, index) => { 
                  const { icon, name } = item;
                  return (
                    <div key={index} className='flex items-center gap-x-3 flex-1'>
                      <div className='text-3xl text-accent'>{icon}</div>
                      <div className='text-base '>{name}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          {/* Right */}
          <div className='w-full h-full lg:w-[40%] bg-blue-300'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Quaerat sed, dicta nesciunt inventore accusamus amet itaque
            nemo sapiente sequi, provident fugiat vel tempore. Minima cupiditate voluptatibus,
            a qui consectetur odio?
          </div>
        </div>
      </div>
    </section>
  )
};

export default RoomDetails;
