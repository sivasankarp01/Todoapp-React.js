import React from 'react'
import { useState } from 'react'
function Todoinput(props) {
    const [input,setInput]=useState("");
    const [errorr,setError]=useState("");

   const {todo}=props;
    const data={title:input,iscomplete:false};
    const handleInputChange = (e) => {
      setInput(e.target.value);
    };

   const cclickeedd=()=>{
    if(input!==""){
      todo(data);
    setInput("");
    setError("")
    }
    else{
         setError("enter a value")
    }
   }

  return (
    <div className='input-and-button'>
        <input onChange={handleInputChange } value={input}/>
        <p style={{color:"red"}} >{errorr}</p>
        <button className='plusbutton' onClick={cclickeedd} >Add Task</button>      
    </div>
  )
}

export default Todoinput