import { useEffect, useState } from 'react';
import styles from './todo.module.css'
function Todo()
{
    const [tasks,setTasks]=useState([]);
    const handleAddTask=()=>{
        const t=document.getElementById("taskInput").value;
        t.trim();
        if(t!=="")
        setTasks((task)=>[...task,t])
        document.getElementById("taskInput").value="";
    }

    const handleRemoveTask=(index)=>
    {
        setTasks(tasks.filter((_,i)=>i!==index))
    }
    const moveUp=(index)=>{
        const updatedTask=[...tasks];
        if(index>0)
        {
        [updatedTask[index],updatedTask[index-1]]=[updatedTask[index-1],updatedTask[index]];
        } 
        setTasks(updatedTask)  
    }
    const moveDown=(index)=>{
        const updatedTask=[...tasks];
        if(index<tasks.length-1)
        {
        [updatedTask[index],updatedTask[index+1]]=[updatedTask[index+1],updatedTask[index]];
        } 
        setTasks(updatedTask)  
    }
    // const [width,setWidth]=useState(window.innerWidth);
    // const [height,setHeight]=useState(window.innerHeight);
    // useEffect(()=>{
    //     window.addEventListener("resize",handleResize);
    //     console.log("Event listener added")
    // },[width,height])
    // const handleResize=()=>
    // {
    //     setHeight(window.innerHeight);
    //     setWidth(window.innerWidth);
    // }
    
    return(
        <div className={styles.container}>

            <h1 className={styles.head}>To-Do List</h1>
            <label for="taskInput">Enter Task:</label>
            <input className={styles.taskInput} id="taskInput" type="text" ></input>
            <button className={styles.btn} onClick={handleAddTask}>Add Task</button>

            <ul className={styles.taskList}>
                {tasks.map((task,index)=>
                <li key={index} className={styles.list}>{task} 
                <button  value="completed" onClick={()=>handleRemoveTask(index)} >Done</button> 
                <button onClick={()=>moveDown(index)}> Down</button> 
                <button onClick={()=>moveUp(index)}> Up</button>
              
                </li>)}
            </ul>

            {/* <p>Width:{width}</p>
            <p>Height:{height}</p> */}
        </div>
    )
}
export default Todo;