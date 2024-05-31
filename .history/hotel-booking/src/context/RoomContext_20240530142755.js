import React, {Children, createContext, useEffect, useState} from 'react';

import { roomData } from '../data';
export const RoomContext = createContext();

const RoomContext = () => {

  return (
    <RoomContext.Provider value={'room-context'}>
      {Children}
    </RoomContext.Provider>
  )
};

export default RoomContext;
