import React, {Children, createContext, useEffect, useState} from 'react';

import { roomData } from '../data';
export const RoomProvider = createContext();

const RoomContext = () => {

  return (
    <RoomProvider.Provider value={'room-context'}>
      {children}
    </RoomProvider.Provider>
  )
};

export default RoomContext;
