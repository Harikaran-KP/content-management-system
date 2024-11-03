import React from 'react';
import Label from '../label/Label';

const Dropdown = ({ label, id, options, value, onChange, name }) => (
    <div className='dropdown-container'>
        {label && <Label text={label} htmlFor={name} />}
        <select name={name} id={id} style={{ height: '34px', marginBottom: '15px', width: '100%', border: 'none', borderRadius: '4px' }} value={value} onChange={onChange} className="dropdown">
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    </div>
);

export default Dropdown;


