import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaTwitter } from 'react-icons/fa';
import Sidebar from './Sidebar';
import Social from './Social';
import logo from './logo.svg';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button className="nav-toggle">
            <FaBars />
          </button>
        </div>
        <Sidebar />
        <Social />
      </div>
    </nav>
  );
}

export default Navbar;
