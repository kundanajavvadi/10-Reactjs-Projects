import React, { useState } from 'react'

function Calculator() {
    const [input,setInput]=useState('');
    const [result,setResult]=useState(0);
    const handleGenerator =(e)=>{
         setInput(e.target.value)
    }
    function handleResult()
    {
        let res=eval(input);
        setResult(res);
    }
    
  return (
    <center>
        <h1>Calculator</h1>
    <div >
        <div className='calculator'>
        <input type="text" value={input} onClick={handleGenerator}/><br/>
        <button onClick={handleResult}>Result</button><br/>
        <h3>Result is: {result}</h3><br/>
        <button onClick={()=>setInput(input+'1')}>1</button>
        <button onClick={()=>setInput(input+'2')}>2</button>
        <button onClick={()=>setInput(input+'3')}>3</button>
        <button onClick={()=>setInput(input+'4')}>4</button>
        <button onClick={()=>setInput(input+'5')}>5</button><br/>
        <button onClick={()=>setInput(input+'6')}>6</button>
        <button onClick={()=>setInput(input+'7')}>7</button>
        <button onClick={()=>setInput(input+'8')}>8</button>
        <button onClick={()=>setInput(input+'9')}>9</button>
        <button onClick={()=>setInput(input+'0')}>0</button><br/>
        <button onClick={()=>setInput(input+'+')}>+</button>
        <button onClick={()=>setInput(input+'-')}>-</button>
        <button onClick={()=>setInput(input+'*')}>*</button>
        <button onClick={()=>setInput(input+'/')}>/</button>
        <button onClick={()=>{
            setInput('');
            setResult(0);
        }}>clr</button><br/> 
        </div>
    </div>
    </center>
  )
}

export default Calculator