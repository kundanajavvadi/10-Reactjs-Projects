import React, { useState } from 'react'
import './LightDark.css'
function LightDark() {
    const[theme,setTheme]=useState("dark");
    function handletogglebutton()
    {
        setTheme(theme==='dark'?'light':'dark');
    }
  return (
    <div>
       <center> <h1>Light-Dark-Mode Button</h1></center>
    
    <div className='light-dark-mode' data-theme={theme}>
        <div className='container'> 
            <p>Hello World</p><br/>
            <button onClick={handletogglebutton}>Generate</button>
        </div>
         
    </div>
    </div>
  )
}

export default LightDark