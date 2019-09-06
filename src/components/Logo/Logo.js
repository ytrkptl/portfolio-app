import React from 'react';
import logo from '../../images/math-processor-th.png';
import './Logo.css';

const Logo = () => {
  return (
    <div id="logo">
      <img style={{height:40,width:40}} alt='logo' src={logo}/>
    </div>
  );
}

export default Logo;