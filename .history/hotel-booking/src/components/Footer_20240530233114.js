import React from 'react';

import LogoWhite from '../assets/img/logo-white.svg';

const Footer = () => {
  return (
    <footer className='bg-primary py-12'>
      <div className='container mx-auto text-white flex justify-between'>
        <a href="/">
          <img src={LogoWhite} alt="logo" className="w-[160px]" />
        </a>
        Copyright &copy; 2024.
      </div>
    </footer>
  )
};

export default Footer;
