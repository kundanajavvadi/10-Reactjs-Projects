import React,{useState} from 'react'
import { useEffect } from 'react';

function RandomColor() {
    const [color,setColor]=useState("#000000");
    const[typeofcolor,setTypeofcolor]=useState('hex');
    function randomFunctionality(length)
    {
        return Math.floor(Math.random()*length);
    }
    function handleGenerateHex()
    {
        const hex=[1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
        let hexcolor="#";
        for(let i=0;i<6;i++)
            {
                 hexcolor += hex[randomFunctionality(hex.length)];
            }
            console.log(hexcolor);
            setColor(hexcolor)
    }
    function handleGenerateRgb()
    {
        const r=randomFunctionality(256);
        const g=randomFunctionality(256);
        const b=randomFunctionality(256);
        setColor(`rgb(${r},${g},${b})`);
    }
    useEffect(()=>{if(typeofcolor==='rgb')
        {
          handleGenerateRgb();
        }
        else
        {
            handleGenerateHex();
        }
    },[typeofcolor]
    );
    
    return (
         <center>
            <h1>Random-Color-Generator</h1>
        <div style={{
            width: "100vw",
            height: "100vh",
            background: color,
        }} >
        <button onClick={()=>setTypeofcolor('hex')}>create hex color</button>
        <button onClick={()=>setTypeofcolor('rgb')}>create rgb color</button>
        <button onClick={typeofcolor==='hex'?handleGenerateHex:handleGenerateRgb}>create random color</button>
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection  :'column',
          gap :'20px'
        }}>
            <center>
                <h4>{typeofcolor}</h4>
               <h4>{color}</h4>
            </center>
        </div>
        </div>
        </center>
  )
}

export default RandomColor