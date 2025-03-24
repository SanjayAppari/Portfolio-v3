import React from 'react';
import './Dialog.css';

function Dialog({ onClose }) {
    return (
        <div className="dialog-overlay">
            <div className="dialog">
                <h2>Dialog Title</h2>
                <p>This is the dialog content.</p>
                <button onClick={onClose}>Close Dialog</button>
            </div>
        </div>
    );
}

export default Dialog;
