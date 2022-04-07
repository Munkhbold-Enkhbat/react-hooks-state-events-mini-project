import React, { useState } from "react"
import Task from "./Task"

function TaskList({ tasks }) {

  const [updatedTasks, setUpdatedTasks] = useState(tasks)
  
  function handleButtonClick(str) {
     const newTaskList = tasks.filter(task => {
       return task.text !== str
      })
      console.log("NewList:", newTaskList);
     setUpdatedTasks(newTaskList)
  }

  return (
    <div className="tasks">
      {
        tasks.map((task, index) => {
          return (
          <Task 
            key={index} 
            category={task.category} 
            text={task.text}
            handleButtonClick={() => handleButtonClick(task.text)}
          />       
          )
        })
      }
    </div>
  );
}

export default TaskList;
