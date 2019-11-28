import React from 'react';
// import logo from '../../assets/math-processor-th.png';
import './Logo.css';

const Logo = () => {

  const logo = `https://res.cloudinary.com/dun1b4fpw/image/upload/c_limit,f_auto,h_40,q_auto,w_40/v1574951668/portfolioapp/ddylw3n1ydk2aw8b75tt.png`

  return (
    <div id="logo">
      <img style={{height:40,width:40}} alt='logo' src={logo}/>
    </div>
  );
}

export default Logo;