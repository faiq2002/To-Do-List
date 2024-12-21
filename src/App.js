import { useState } from 'react';
import './App.css';

import 'react-notifications/lib/notifications.css';
import { NotificationContainer,NotificationManager } from 'react-notifications';


function App() {
let [toDOList,setToDoList]=useState([]);
let FinaToDoList=toDOList.map((detail,i)=>{
  return(
   
    <List detail={detail} index={i} key={i} toDOList={toDOList} setToDoList={setToDoList}/>
  )
})

  let toDoFun=(event)=>{

    let toName=event.target.toName.value;
    console.log(toName);
    
    if (toName==="")
      {
        <NotificationContainer/>
        NotificationManager.error("Enter some Task")
      }
      else{
        if(!toDOList.includes(toName))
          {
            let finalList=[...toDOList,toName]
            setToDoList(finalList);
           
            

          }
          else{
            NotificationManager.error("This task has already has been added")
          }
      }
   
   event.preventDefault();
   event.target.toName.value=""

  
  }
  return (
    <>
     <NotificationContainer/>
    <form onSubmit={toDoFun}>
      <input  type='text' name='toName' placeholder='Enter your task..'></input>
      <button className ="button2">Save</button>
    </form>
    
    <div className="box">
    <h2>To Do list</h2>
{FinaToDoList}
    </div>
    </>
  );
}

export default App;
 
function List({detail ,index,toDOList,setToDoList})

{
  let [status,setStatus]=useState(true)
  let deleteRow=()=>
  {
    let finalData=toDOList.filter((v,i)=>
    i!==index)
    setToDoList(finalData)
    NotificationManager.info("Task has sucessfully removed")

  }
let remove=()=>
  {
   setStatus(!status) 
  
  }

  return(
    <>
    <NotificationContainer/>
  <ul>
    <div className="list">
    <li onClick={remove} className={`"task" ${(status)?"":"complete"}`}><span>{index+1}</span> {detail} </li>
    <strong onClick={deleteRow} >&times;</strong> 
    </div>
   
  </ul>
</>
  )
}