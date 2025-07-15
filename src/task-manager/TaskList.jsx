import React from 'react'

export default function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <div>
      <ul className="task-list li" >
        {tasks.map((task, index) => (
          <li key={index}>
            <span
              onClick={() => toggleTask(task["id"])}
              className={task["completed"] == true && "completed"}
            >
              {task["text"]}
            </span>
            <span onClick={() => deleteTask(task["id"])} className="delete">
              X
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
