import React, { useState } from "react";

export default function TaskForm({ addTask }) {
  const [value, setValue] = useState("");
  // const handleChange = (e)=>{
  //   setValue (e.target.value)
  //   console.log(value);
  // }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value.trim()) {
      //add task to list
      addTask(value);
      console.log("Form Submitted!", value);
      setValue("");
    }
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="add-task-action">
          <input
            type="text"
            // onChange={handleChange}
            onChange={(e) => setValue(e.target.value)}
            value={value}
            placeholder="Add a Task..."
            className="add-task-input"
          />
          <button type="submit" className="add-task-btn">   
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
