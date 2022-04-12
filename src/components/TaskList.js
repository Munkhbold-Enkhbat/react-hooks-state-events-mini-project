import React, { useState } from "react"
import Task from "./Task"

function TaskList({ data }) { 

  const [tasks, setTasks] = useState(data)

  function handleClick(str) {
    setTasks(tasks.filter((task) => task.text !== str));    
  }

  return (
    <div className="tasks">
      {
        tasks.map((task, index) => {
          return( 
            <Task 
              key={index} 
              category={task.category} 
              text={task.text}
              handleClick={() => handleClick(task.text)}
            />
          ) 
        })
      }
    </div>
  );
}

export default TaskList;
