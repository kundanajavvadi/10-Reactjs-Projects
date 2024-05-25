import React, { useState } from 'react'
import Modal from './Modal';

function CutomModal() {
    const [modelpopup,setModelpopup]=useState(false);
    function handlemodelpop()
    {
        setModelpopup(!modelpopup);
    }
    function onClose()
    {
        setModelpopup(false);
    }

  return (
    <center>
        <h1>Custom Modal Pop Up</h1>
    <div>
        
        <div>
            <button  onClick={handlemodelpop}>Open modal Popup</button>
            {
                modelpopup&&(
                    <Modal  header={<h1>customized header</h1>} body={<div>this is customized body</div> } footer={<h1>this is footer</h1>} onClose={onClose}/>
                )
            }

        </div>
    </div>
    </center>
  )
}

export default CutomModal