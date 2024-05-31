import React, { useState } from 'react';
import DataPicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css'
import '../datepicker.css'

import { BsCalendar } from 'react-icons/bs'


const CheckOut = () => {
  const [startDate, setStartDate] = useState(false)
  
  return (
    <div className='relative flex items-center justify-end h-full'>
      <div className='absolute z-10 pr-8'>
        <div>
          <BsCalendar className='text-accent text-base' />
        </div>
      </div>
      <DataPicker
        className='w-full h-full'
        selected={startDate}
        placeholderText='Check-out'
        onChange={(date) => setStartDate(date)} />
    </div>
  )
}
export default CheckOut;
