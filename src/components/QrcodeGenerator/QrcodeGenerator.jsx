import React, { useState } from 'react'
import QRCode from "react-qr-code"
function QrcodeGenerator() {
    const [input,setInput]=useState('');
    const [qrcode,setQrcode]=useState('');
    function handleGenerateqrcode()
    {
        setQrcode(input);
        setInput('');
    }
  return (
    <center>
        <h1>QR code generator</h1>
    <div>
       <input type="text" value={input} placeholder='enter value'
       onChange={(e)=>{setInput(e.target.value)}}/>
       <button onClick={handleGenerateqrcode}>Generate</button>
    </div>
    <div>
        <QRCode value={qrcode}/>
    </div>
    </center>
  )
}

export default QrcodeGenerator