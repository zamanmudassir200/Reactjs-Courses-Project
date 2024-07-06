import React, { useState, useEffect, useRef } from "react";
import TodoContext from "./TodoContext";

const TodoProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [editText, setEditText] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    const storedTodoItems = JSON.parse(window.localStorage.getItem("todos"));
    if (storedTodoItems) {
      setTodos(storedTodoItems);
    }
  }, []);

  const handleTaskInput = (e) => {
    setTask(e.target.value);
  };

  const handleAddBtn = () => {
    if (task.trim().length !== 0) {
      const newTask = task.trim();
      const todosItemsArr = {
        id: Date.now(),
        text: newTask,
        isEditing: false,
        completed: false,
      };
      const updatedTodoItemsArr = [todosItemsArr, ...todos];
      setTodos(updatedTodoItemsArr);
      inputRef.current.focus();

      window.localStorage.setItem("todos", JSON.stringify(updatedTodoItemsArr));
      setTask("");
    }
  };

  const handleDeleteBtn = (id) => {
    const updateTodosItemsArr = todos.filter((todo) => todo.id !== id);
    setTodos(updateTodosItemsArr);
    window.localStorage.setItem("todos", JSON.stringify(updateTodosItemsArr));
  };

  const toggleEdit = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
    );
    setTodos(updatedTodos);
    window.localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const handleEditBtn = (id, newText) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText, isEditing: false } : todo
    );
    setTodos(updatedTodos);
    window.localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const handleCheckBoxInput = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
    window.localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  return (
    <TodoContext.Provider
      value={{
        showModal,
        setShowModal,
        task,
        setTask,
        todos,
        setTodos,
        editText,
        setEditText,
        inputRef,
        handleTaskInput,
        handleAddBtn,
        handleDeleteBtn,
        toggleEdit,
        handleEditBtn,
        handleCheckBoxInput,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
