import React from 'react';
import './Sidebar.css';

const Sidebar = ({ onSelect, onClose }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-brand">
        <h2>Content Management System</h2>
      </div>
      {/* <button className="sidebar-close" onClick={onClose}>✖</button> */}
      <ul className="sidebar-links">
        <li onClick={() => { onSelect('content'); onClose(); }}>
          <i className="icon icon-content"></i> Content List
        </li>
        <li onClick={() => { onSelect('drafts'); onClose(); }}>
          <i className="icon icon-drafts"></i> Drafts
        </li>
        <li onClick={() => { onSelect('edit'); onClose(); }}>
          <i className="icon icon-drafts"></i> Edit Content
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
