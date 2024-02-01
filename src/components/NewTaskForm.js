import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [newTask, setNewTask] = useState({
    text: "",
    category: categories[0],
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setNewTask((prevTask) => ({ ...prevTask, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit(newTask);
    setNewTask({
      text: "",
      category: categories[0],
    });
  }
  console.log(newTask);
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={newTask.text}
          onChange={handleChange}
        />
      </label>
      <label>
        Category
        <select name="category"
        onChange={handleChange}>
          {
            /* render <option> elements for each category here */
            categories.map(
              (category) =>
                category !== "All" && (
                  <option key={category} value={category}>
                    {category}
                  </option>
                )
            )
          }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
