import React, { useState } from 'react';
import DataPicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css'
import '../datapicker.css'

import { BsCalendar } from 'react-icons/bs'


const CheckIn = () => {
  const [startDate, setStartDate] = useState(false)
  
  return (
    <div>
      <div>
        <div>
          <BsCalendar />
        </div>
      </div>
      <DataPicker
        className='w-full h-full'
        selected={startDate}
        placeholderText='Check-in'
        onChange={(date) => setStartDate(date)} />
    </div>
  )
}
export default CheckIn;
