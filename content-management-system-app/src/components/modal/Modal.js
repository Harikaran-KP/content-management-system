import React, { useContext } from 'react';
import Button from '../button/Button';
import './Modal.css';
import { DeleteContext } from '../../services/DeleteContentContext';

const Modal = ({ show, title, onClose, onConfirm, children }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2 className="modal-title">{title}</h2>
        <div className="modal-content">{children}</div>
        <div className="modal-actions">
          <Button label="Cancel" onClick={onClose} style={{ backgroundColor: '#f44336' }} />
          <Button label="Confirm" onClick={onConfirm} style={{ backgroundColor: '#4caf50' }} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
