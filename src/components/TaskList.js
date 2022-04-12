import React, { useState } from "react"
import Task from "./Task"

function TaskList({ tasks }) { 

  const [updatedTasks, setUpdatedTasks] = useState(tasks)

  function handleClick(str) {
    setUpdatedTasks(updatedTasks.filter((updatedTasks) => updatedTasks.text !== str));    
  }

  return (
    <div className="tasks">
      {
        updatedTasks.map((updatedTasks, index) => {
          return( 
            <Task 
              key={index} 
              category={updatedTasks.category} 
              text={updatedTasks.text}
              handleClick={() => handleClick(updatedTasks.text)}
            />
          ) 
        })
      }
    </div>
  );
}

export default TaskList;
