import React, {useState} from 'react'
import './todo.css'
function Todo() {
    const[value,setValue] = useState("")
    const[todos,setTodos] = useState([]);
   
  return (
    <div>
        <h1>Add your Todo</h1>
        <br/>
        <br/>

        <input className="inputTodo" value={value} onChange={(e)=>setValue(e.target.value)} />
        <button
        className="btn"
        onClick={()=>{
            setTodos([...todos, {id:Date.now() ,value:value}]);
            setValue("");
        }}>+</button>
        {todos.map((todo)=>(
            
            <div className="TodoDiv">
            <br/>
            
            
            <div className="text" key={todo.id}>
            <input type="checkbox" id="mycheck"    onClick={()=>{
              var checkbox = document.getElementById("mycheck");
              var text = document.getElementById("task");
              if(checkbox.checked == true)
              {
                text.style.textDecoration = "line-through"
                text.style.color = "grey"
              }
              else{
                text.style.color = "black"
                text.style.textDecoration = "none"

              }
            }}/><h4 id='task'>{todo.value}</h4></div>
            </div>
        ))}
    </div>
  )
}

export default Todo