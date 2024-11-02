import React from 'react';
import Label from '../label/Label';
import './TextInput.css';

const TextInput = ({ label, value, onChange, name, id }) => (
  <div className="text-input-container">
    {label && <Label text={label} htmlFor={name} />}
    <input
      type="text"
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className="text-input"
    />
  </div>
);

export default TextInput;
