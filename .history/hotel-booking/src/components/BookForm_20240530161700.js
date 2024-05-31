import React from 'react';
import CheckIn from './CheckIn';
import CheckOut from './CheckOut';
import AdultsDropdown from './AdultsDropdown'
import KidsDropdown from './KidsDropdown'

const BookForm = () => {
  return <form className='h-[300px] bg-green-100 w-full lg:h-[70px]'>
    <div>
    <div>
      <CheckIn/>
      </div>
      <div>
        <CheckOut/>
      </div>
    <div>
      <AdultsDropdown/>
    </div>
    <div>
      <KidsDropdown/>
      </div>
   </div>
  </form>;
};

export default BookForm;
