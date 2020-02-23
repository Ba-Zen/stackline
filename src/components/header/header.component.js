import React from 'react';
import './header.styles.scss';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <div className='header'>
      <a
        href='https://stackline.com'
        target='__blank'
        rel='noopener noreferrer'
      >
        <img src={logo} alt='Stackline' className='logo' />
      </a>
    </div>
  );
};

export default Header;
