import { useState } from "react";
import "./App.css";
import { ToDoList } from "./components/ToDoList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="todo-list">
      <h1>To Do List</h1>
      <ToDoList />
    </div>
  );
}

export default App;
