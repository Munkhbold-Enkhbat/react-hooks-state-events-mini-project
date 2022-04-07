import React from "react"
import Task from "./Task"

function TaskList({ tasks, handleButtonClick }) {

  return (
    <div className="tasks">
      {
        tasks.map((task, index) => {
          return (
          <Task 
            key={index} 
            category={task.category} 
            text={task.text}
            handleButtonClick={handleButtonClick}
          />       
          )
        })
      }
    </div>
  );
}

export default TaskList;
