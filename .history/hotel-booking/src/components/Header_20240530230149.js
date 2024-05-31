import React, { useEffect, useState } from 'react';

import LogoWhite  from '../assets/img/logo-white.svg'
import LogoDark from '../assets/img/logo-dark.svg'
const Header = () => {
  const [header, setHeader] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY >= 50 ? setHeader(true) : setHeader(false);
    })
  })
  return (
    <header className={`${
      header ? 'bg-white py-6 shadow-lg' : 'bg-transparent py-8'
    } fixed z-50 w-full transition-all duration-500`}>
      <div>
        <a href="/">
          {header ? <img className='w-[160px]' src={LogoDark} alt="logo" /> : <img className='w-[160px]' src={LogoWhite} alt="logo" />}
        </a>

        <nav className={`${header ? 'text-primary' : 'text-white'} flex gap-x-4 font-tertiary
         tracking-[3px] text-[15px] items-center uppercase lg:gap-x-8`}>
          <a href="/" className='hover:text-accent transition'>
            Home
          </a>
          <a href="/" className='hover:text-accent transition'>
            Rooms
          </a>
          <a href="/" className='hover:text-accent transition'>
            Restaurant
          </a>
          <a href="/" className='hover:text-accent transition'>
            Spa
          </a>
          <a href="/" className='hover:text-accent transition'>
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
};

export default Header;