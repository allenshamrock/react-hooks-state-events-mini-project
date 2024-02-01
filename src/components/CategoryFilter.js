import React, { useState } from "react";

function CategoryFilter({ categories, tasks, setFilteredTasks }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleFiteredTasks(category) {
    const filteredTasks =
      selectedCategory === "All"
        ? tasks
        : tasks.filter((task) => task.category === category);
    console.log('before async');
    setFilteredTasks(filteredTasks);
   // setFilteredTasks((prevTasks) => filteredTasks );
    console.log(filteredTasks)
     console.log("after async");

    setSelectedCategory(category);
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {
        /* render <button> elements for each category here */
        categories.map((category) => (
          <button
            key={category}
            onClick={() => handleFiteredTasks(category)}
            className={`category ${
              category === selectedCategory ? "selected" : ""
            }`}
          >
            {category}
          </button>
        ))
      }
    </div>
  );
}

export default CategoryFilter;
