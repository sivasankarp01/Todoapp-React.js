
import { useState } from 'react';
import './App.css';
import Todoinput from './components/Todoinput';



function App() {


  const [todolist,settodolist]=useState([ ]);
  
  
 function editbutton(id){
  const newTitle = prompt('Enter the new title');
   if(newTitle){
    settodolist((prevList)=>prevList.map((item)=> (item.id === id ? { ...item, title: newTitle } : item)));
   } 
   
 }
 

  function updatetodolist(data){
    settodolist(ee=>[...ee,{id: ee.length + 1,title:data.title,iscomplete:data.iscomplete}])
  }
  
  function deleteItem(id) {
    settodolist((prevList) => prevList.filter((item) => item.id !== id));
  }
  
  return (
    
    <div className="App">

    
       
       <h1>TODO LIST</h1>
       <hr></hr>
       <div>
        <Todoinput todo={updatetodolist} />
       </div>
       <div className='todo-item' >
       {todolist.map((task,i ) =>(     
         
         <div className='single-item'>
          <p key={task.id}>{task.title}   </p>
          <div><button className='delete-button'onClick={()=>editbutton(task.id)} >edit item</button>
          <button className='delete-button' onClick={()=>deleteItem(task.id)}>delete task</button></div>
         </div>
        
        
       
     
     ))}
       </div>
       
     
      
       
       
    </div>
  );
}

export default App;




