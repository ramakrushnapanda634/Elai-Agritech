import React,{useState} from 'react'
import { useEffect } from 'react'
import {useNavigate} from "react-router-dom"

const Counter = () => {

    const navigate=useNavigate()
    const [count,setCount]=useState(0)
    useEffect(()=>{
   let x = +(localStorage.getItem("count") );
   console.log("count",x);
  
    },[])
 
    const handleClick=()=>{
        setCount(+localStorage.getItem("count") + 1);
        
      
    }
      localStorage.setItem("count", +(count ));
  return (
    <div>
        <br/>
        <br/>
        <h1>COUNT:{count}</h1>
        <button onClick={handleClick}>BUTTON</button>
    <br></br>
    <br></br>
    <button onClick={()=>navigate("/page")}> BUTTON TO GO TO NEXT</button>
    
    </div>
  )
}

export default Counter