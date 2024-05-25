import React from 'react';
import './CustomModal.css';

function Modal({ header, body, footer, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="header">
          <span className="close-modal-icon" onClick={onClose}>&times;</span>
          {header}
        </div>
        <div className="body">
          {body}
        </div>
        <div className="footer">
          {footer}
        </div>
      </div>
    </div>
  );
}

export default Modal;
