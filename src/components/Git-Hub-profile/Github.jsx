import React, { useEffect, useState } from 'react'
import User from './User';
import './Github.css';

function Github() {
    const [username,setUsername]=useState('');
    const [loading,setLoading]=useState(false);
    const [userdata,setUserdata]=useState(null);

    const handleChange=(e)=>{
        setUsername(e.target.value);
    }
    async function fetchUsername(){
        setLoading(true);
       const response=await fetch(`https://api.github.com/users/${username}`);
       const data=await response.json();

       if(data)
        {
            setUserdata(data);
            setUsername('');
            setLoading(false);
        }
    }
    console.log(userdata);
    useEffect(()=>{
      fetchUsername();
    },[])
    function handleData()
    {
        fetchUsername();
    }
    
  return (
    <center>
    <div className='github-container'>
        <div className='inputtext'>
            <input type="text" placeholder='enter github username' onChange={handleChange}/>
            <button  onClick={handleData}>Search</button>
        </div>

        <div>
        {userdata===null?null:<User user={userdata}/>}
        </div>
    </div>
    </center>
  )
}

export default Github