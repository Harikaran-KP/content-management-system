import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ onSelect, adminName = "John Doe", onLogout }) => {
  const [isOpen, setIsOpen] = useState(false); // New state for sidebar visibility

  //Taking first letters from names of admin to create thumnail for profile
  const initials = adminName
    .split(" ")
    .map(name => name[0].toUpperCase())
    .join("");

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger Menu for Mobile */}
      <div className="hamburger" onClick={toggleSidebar}>
        &#9776;
      </div>

      <div className={`sidebar ${isOpen ? 'active' : ''}`}>
        <h2 style={{ color: '#ebe4e4' }}>Content Management System</h2>

        <div className="sidebar-brand">
          <div className="avatar">{initials}</div>
          <span>{adminName}</span>
        </div>

        <ul className="sidebar-links">
          <li onClick={() => { onSelect('content'); closeSidebar(); }}>
            <i className="icon icon-content"></i> Content List
          </li>
          <li onClick={() => { onSelect('edit'); closeSidebar(); }}>
            <i className="icon icon-edit"></i> Edit Content
          </li>
        </ul>

        <button className="logout-button" onClick={onLogout}>
          Logout
        </button>
      </div>
    </>
  );
};

export default Sidebar;
