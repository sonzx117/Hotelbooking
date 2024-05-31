import React, { createContext, useEffect, useState} from 'react';

import { roomData } from '../data';
export const RoomContext = createContext();

const RoomProvider = () => {

  return (
    <RoomContext.Provider value={'room-context'}>
      {children}
    </RoomContext.Provider>
  )
};

export default RoomProvider;
