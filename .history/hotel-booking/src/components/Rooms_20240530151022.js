import React, { useContext } from 'react';
import { RoomContext } from '../context/RoomContext';
import Room from '../components/Room';

const Rooms = () => {
  const roomss = useContext(RoomContext)
  console.log(roomss)
  return (
    <section className=' py-24'>
      <div className='container mx-auto lg:px-0'>
        <div>
        
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Rooms;
