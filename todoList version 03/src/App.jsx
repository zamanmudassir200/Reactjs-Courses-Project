import "./App.css";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
function App() {
  const todoItems = [
    { name: "Buy Chocolates", dueDate: "10/02/2024" },
    { name: "Go to School", dueDate: "10/02/2024" },
    { name: "Buy milk", dueDate: "10/02/2024" },
    { name: "Go to gym", dueDate: "10/02/2024" },
  ];
  return (
    <center>
      <AppName></AppName>
      <AddTodo></AddTodo>
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
