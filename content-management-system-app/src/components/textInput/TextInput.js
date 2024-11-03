import React from 'react';
import Label from '../label/Label';
import './TextInput.css';

const TextInput = ({ label, value, onChange, name, id, type }) => (
  <div className="text-input-container">
    {label && <Label text={label} htmlFor={name} />}
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className="text-input"
    />
  </div>
);

export default TextInput;
