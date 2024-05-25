import React, { useState } from 'react'
import data from './data'
import "./Accordian.css";
function Accordian() {
    const [selected,setSelected]=useState(0);
    const[enableMultipleSelection,setEnableMultipleSelection]=useState(false);
    const[multiple,setMultile]=useState([]);
    function handleSingleSelection(getCurrentId)
    {
        setSelected(getCurrentId===selected?null:getCurrentId);
    }
    function handleMultipleSelection(getCurrentId)
    {
         let cpy=[...multiple];
         const findIndex=cpy.indexOf(getCurrentId);

         console.log(findIndex);
         if(findIndex === -1)
                cpy.push(getCurrentId);
            else
                cpy.splice(findIndex,1);
            setMultile(cpy);
    }
  return (
    <center>
    <div className='wrapper'>
    <h1>Accordian</h1>
        <button onClick={()=>setEnableMultipleSelection(!enableMultipleSelection)} >enable multiple selection</button>
        <div className='accordian'>
            {
                data && data.length>0?
                data.map(dataItem=>
                    <div className='item'>
                        <div className='title' onClick={enableMultipleSelection?()=>handleMultipleSelection(dataItem.id):()=>handleSingleSelection(dataItem.id)}>
                            <h3>{dataItem.question }</h3>
                            <span>+</span>
                            </div>
                            {
                            enableMultipleSelection
                            ? multiple.indexOf(dataItem.id) !== -1 && (
                                <div className="content ">{dataItem.answer}</div>
                              )
                            : selected === dataItem.id && (
                                <div className="content ">{dataItem.answer}</div>
                              )
                            }
                        </div>
                )
                :<div> no data found </div>
            }
        </div>
    </div>
    </center>
  )
}

export default Accordian