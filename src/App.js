import React, { useState } from "react";
import "./App.css";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [inputTask, setInputTask] = useState("");

  const handleAddTask = () => {
    if (inputTask) {
      setTaskList([...taskList, inputTask]);
      setInputTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTaskList = [...taskList];
    updatedTaskList.splice(index, 1);
    setTaskList(updatedTaskList);
  };

  const handleEditTask = (index) => {
    const updatedTaskList = [...taskList];
    const editedTask = prompt("Enter the new task");
    if (editedTask) {
      updatedTaskList.splice(index, 1, editedTask);
      setTaskList(updatedTaskList);
    }
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter task"
          value={inputTask}
          onChange={(e) => setInputTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <div className="task-container">
        {taskList.map((task, index) => (
          <div key={index} className="task">
            <p>{task}</p>
            <div className="buttons">
              <button onClick={() => handleEditTask(index)}>Edit</button>
              <button onClick={() => handleDeleteTask(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
