import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [filteredTasks, setFilteredTasks] = useState(TASKS);


  const onTaskFormSubmit = (newTask) => {
    // Handle the form submission, e.g., update the list of tasks
    setFilteredTasks((prevTasks) => [...prevTasks, newTask]);
  };

  function handleDelete(taskIndex) {
    setFilteredTasks((prevTasks) =>
      prevTasks.filter((_,index)=>index!==taskIndex)
    );
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        tasks={TASKS}
        setFilteredTasks={setFilteredTasks}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList tasks={filteredTasks} onDelete={handleDelete} />
    </div>
  );
}

export default App;
