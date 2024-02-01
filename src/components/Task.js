import React from "react";

function Task({tasks,onDelete}) {
  // function handleDelete(index){
  //  onDelete(index)
  // }
  const{text, category}=tasks
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete"onClick={onDelete}>delete</button>
    </div>
  );
}

export default Task;
