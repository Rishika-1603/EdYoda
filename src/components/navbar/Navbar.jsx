import React, { useState } from 'react';
//import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import LOGO from '../../assets/LOGO.png';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={LOGO} />
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Courses</a></p>
          <p><a href="#wgpt3">Programs</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Log In</p>
        <button type="button">JOIN NOW</button>
      </div>
     
    </div>
  );
};

export default Navbar;