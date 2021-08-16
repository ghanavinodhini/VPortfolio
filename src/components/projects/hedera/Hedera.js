import { Modal } from 'react-modal';
import React from 'react'
import "./Hedera.css";
export default function Hedera(props) {    
    return (
        <div>    
            {console.log(props.isOpen)}       
            <Modal isOpen= {props.isOpen} >              
                    Mody Body Content
                
                
            </Modal>
        </div>
    )
}
