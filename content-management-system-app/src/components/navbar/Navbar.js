import React from 'react';
import './Navbar.css';

const Navbar = ({ onSelect }) => {
  return (
    <nav className="navbar">
      <h1 className="navbar-brand">CMS Dashboard</h1>
      <div className="navbar-links">
        <button onClick={() => onSelect('all')}>Content List</button>
        <button onClick={() => onSelect('drafts')}>Drafts</button>
      </div>
    </nav>
  );
};

export default Navbar;
