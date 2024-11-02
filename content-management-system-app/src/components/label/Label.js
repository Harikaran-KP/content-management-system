import React from 'react';
import './Label.css';

const Label = ({ text, htmlFor }) => (
  <label htmlFor={htmlFor} className="label">
    {text}
  </label>
);

export default Label;
