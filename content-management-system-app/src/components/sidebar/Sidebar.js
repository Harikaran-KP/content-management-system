import React from 'react';
import './Sidebar.css';

const Sidebar = ({ onSelect, onClose, adminName = "John Doe", onLogout }) => {
  const initials = adminName
    .split(" ")
    .map(name => name[0].toUpperCase())
    .join("");

  return (
    <div className="sidebar">
      <h1 style={{color: '#ebe4e4'}}>Content Management System</h1>
      <div className="sidebar-brand">
        <div className="avatar">{initials}</div>
        <span>{adminName}</span>
      </div>
      <ul className="sidebar-links">
        <li onClick={() => { onSelect('content'); onClose(); }}>
          <i className="icon icon-content"></i> Content List
        </li>
        <li onClick={() => { onSelect('edit'); onClose(); }}>
          <i className="icon icon-edit"></i> Edit Content
        </li>
      </ul>
      <button className="logout-button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
