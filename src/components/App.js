import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });



function App() {

  const [tasks, setTasks] = useState(TASKS)
  
  function handleButtonClick(str) {
    setTasks(tasks.filter((task) => task.text !== str));
  }

  // function visibleTasks() {
  //   tasks.filter(task => {

  //   })
  // }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter tasks={TASKS}/>
      <NewTaskForm />
      <TaskList 
        // tasks={visibleTasks} 
        handleButtonClick={handleButtonClick}
      />
    </div>
  );
}

export default App;
