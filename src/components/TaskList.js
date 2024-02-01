import React from "react";
import Task from "./Task";
function TaskList({ tasks, onDelete }) {
  //console.log(tasks)
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((task, index) => (
        <Task key={index} tasks={task} onDelete={()=>onDelete(index)} />
      ))}
    </div>
  );
}

export default TaskList;
