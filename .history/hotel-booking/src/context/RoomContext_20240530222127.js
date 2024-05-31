import React, { createContext, useEffect, useState} from 'react';

import { roomData } from '../data';
export const RoomContext = createContext();

const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState(roomData);
  const [adults, setAdults] = useState('1 Adults');
  const [kids, setKids] = useState('0 Kids');
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(Number(adults[0]) + Number(kids[0]))
  })
  const handleClick = (e) => {
    e.preventDefault();
    console.log(total);
  }
  return (
    <RoomContext.Provider value={{rooms, adults, setAdults, kids, setKids, handleClick}}>
      {children}
    </RoomContext.Provider>
  )
};

export default RoomProvider;
