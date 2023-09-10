import React from 'react'
// import { HashRouter } from 'react-router-dom';
import {TodoItem} from "../Mycomponents/TodoItem";

export const Todos = (props) => {
 let myStyle={
    minHeight:"100vh",
    margin:"40px auto"
  }
  return (
    <>
    <div className="container my-3" style={myStyle}>
     <h3 className=" my-3">Todos List</h3>
     {/* {props.Todos} */}
     {props.todos.length===0? "No todos display": 
     props.todos.map((todo) =>{
      return(
        
       <TodoItem todo ={todo} key={todo.sno} onDelete={props.onDelete}/>
        
     )})
}
  
    </div>
    <hr/>
    </>
  )
}
