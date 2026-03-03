import React from "react";
import '../src/Modal.css';
import close from './assets/icons8-close-50.png'

export default function Modal({open, children, onClose}){
    if(!open) return null
    return(
       
        <div className="soda">
            <div className="button">
            <button onClick={onClose}><img src={close}></img></button>
            </div>
        
            <div>
            { children}
            </div>
</div>
    )
}