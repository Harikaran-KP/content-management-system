import React from 'react';
import './TopNavbar.css';
import { HamburgerIcon } from '../../svgIcons/HamburgerIcon';

const TopNavbar = ({ onToggleSidebar }) => {
  return (
    <div className="top-navbar">
      {/* <button className="hamburger-icon" onClick={onToggleSidebar}>☰</button> */}
      {/* <div className='hamburger-icon'><HamburgerIcon /></div> */}
      <h2 className="app-title">Media Content Management</h2>
    </div>
  );
};

export default TopNavbar;
