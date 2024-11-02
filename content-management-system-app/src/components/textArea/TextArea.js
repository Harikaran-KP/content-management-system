import React from 'react';
import Label from '../label/Label';
import './TextArea.css';

const TextArea = ({ label, id, value, onChange, name, placeholder }) => (
    <div className="textarea-container">
        {label && <Label text={label} htmlFor={name} />}
        <textarea
            id={id}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="textarea"
        />
    </div>
);

export default TextArea;
