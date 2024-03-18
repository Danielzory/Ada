import { FC } from 'react';
import "./modal.css"
import { ModalProps } from './types';


const Modal:FC<ModalProps> = ({ description, onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <button className="close-button" onClick={onClose}>X</button>
                <p>{description}</p>
            </div>
        </div>
    );
};

export {Modal}