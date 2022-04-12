import React, { useState } from "react"
import Task from "./Task"

function TaskList({ tasks }) { 
  console.log("DisplaySelectedCategoryItems:", tasks);
  const [updatedTasks, setUpdatedTasks] = useState(tasks)
  // handle Delete task
  function handleClick(str) {
    setUpdatedTasks(updatedTasks.filter(updatedTask => updatedTask.text !== str));    
  }

  return (
    <div className="tasks">
      {
        updatedTasks.map((updatedTask, index) => {
          return( 
            <Task 
              key={index} 
              category={updatedTask.category} 
              text={updatedTask.text}
              handleClick={() => handleClick(updatedTask.text)}
            />
          ) 
        })
      }
    </div>
  );
}

export default TaskList;
