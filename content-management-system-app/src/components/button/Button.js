import React from 'react';
import './Button.css';

const Button = ({ label, onClick, type = 'button', style = {} }) => {
  return (
    <button type={type} onClick={onClick} className="button" style={style}>
      {label}
    </button>
  );
};

export default Button;
