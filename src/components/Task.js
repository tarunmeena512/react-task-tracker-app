import React from "react";
import { FaTimes } from "react-icons/fa";

const Task = ({task,onDelete,sendReminder}) => {
    return (
       <div className={`task ${task.reminder ? 'reminder' : 'noReminder'}`} 
       onDoubleClick={ ()=>sendReminder(task)}>
         <h3>{task.text} <FaTimes  onClick={ ()=>onDelete(task.id)} style={{color :"red" ,cursor:'pointer'}}/></h3>  
         <p>{task.day}</p>
         {!task.reminder && <p>Double click to send reminder!!</p> }
       </div>
      );
}
 
export default Task;
