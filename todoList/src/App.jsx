import "./App.css";
import AddTodo from "./components/AddTodo";
import AddTodoItem1 from "./components/AddTodoItem1";
import AddTodoItem2 from "./components/AddTodoItem2";

import AppName from "./components/AppName";
function App() {
  return (
    <center>
      <AppName></AppName>
      <AddTodo></AddTodo>
      <div className="items-container">
        <AddTodoItem1></AddTodoItem1>
        <AddTodoItem2></AddTodoItem2>
      </div>
    </center>
  );
}

export default App;
