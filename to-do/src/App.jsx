import React from 'react'
import './App.css'
import { useState } from 'react'

function App() {
  const [toDos,setTodos]= useState([])
  const [toDo,setToDo] = useState("")
  console.log(toDos);
  
  return (
    <div>
            
    <div className="app">
      <div className="mainHeading">
        <h1 className='font-bold text-[20px]'>GraviTational Power</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, Just Do It</h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(event)=>setToDo(event.target.value)} type="text" placeholder=" Add item..." />
        <i onClick={()=>setTodos([...toDos,{id:Date.now(),text: toDo,status:false}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
       { toDos.map((obj)=>{
         
      return<div className="todo">
        <div className="left">
          <input onChange={(e)=>{
            console.log(e.target.checked)
            console.log(obj)
            setTodos(toDos.filter(obj2=>{
              if(obj2.id===obj.id){
                obj2.status=e.target.checked
              }
              return obj2

            }))
          }}  value={obj.status} type="checkbox" name="" id="" />
          <p>{obj.text}</p>
        </div>
        <div className="right">
          <i className="fas fa-times"></i>
        </div>
      </div> 
       })}
         {toDos.map((obj)=>{
             if(obj.status){
              return(<h1>{obj.text}</h1>)
             }
             return null

         })}
      </div>
    </div>
  

    </div>    
  )
}

export default App
