import React, { useContext } from 'react';
import { RoomContext } from '../context/RoomContext';
import Room from '../components/Room';

const Rooms = () => {
  const rooms = useContext(RoomContext)
  console.log(rooms)
  return (
    <section className=' py-24'>
      <div className='container mx-auto lg:px-0'>
        <div>
          <h2 className='text-4xl font-bold text-center'>Our Rooms</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {rooms.rooms.map((room) => {
              return <Room key={room.id} room={room} />;
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Rooms;
