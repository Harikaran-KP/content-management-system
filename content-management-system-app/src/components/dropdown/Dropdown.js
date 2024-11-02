import React from 'react';
import Label from '../label/Label';
import './Dropdown.css';

const Dropdown = ({ label, id, options, value, onChange, name }) => (
    <div className="dropdown-container">
        {label && <Label text={label} htmlFor={name} />}
        <select name={name} id={id} value={value} onChange={onChange} className="dropdown">
            {options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
);

export default Dropdown;
