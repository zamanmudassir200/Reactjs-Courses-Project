import React, { useState, useRef, useEffect } from "react";

import Header from "./components/Header";
import TodoItems from "./components/TodoItems";
import Modal from "./components/Modal";
import TodoItemContext from "./context/TodoItemContext";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [task, setTask] = useState("");
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

  const toggleEdit = (id, newText) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id
        ? { ...todo, text: newText, isEditing: !todo.isEditing }
        : todo
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
  };

  return (
    <TodoItemContext.Provider>
      <div className="px-10 py-5 bg-purple-300 min-h-screen ">
        <Header
          inputRef={inputRef}
          task={task}
          handleTaskInput={handleTaskInput}
          handleAddBtn={handleAddBtn}
        />

        <div className="my-[100px] flex-col h-auto text-center items-center justify-center top-[100px] left-[50px] shadow-xl rounded-lg p-4 bg-white  gap-2 flex  w-[100%]  ">
          <h1 className="text-4xl mt-4 text-center sm:pt-0 font-bold">
            Todo List
          </h1>
          <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
            <p className="text-red-500 text-xl font-semibold italic">
              You cannot save the empty todo item. Please write something...
            </p>
          </Modal>
          {todos.length === 0 ? (
            <h1 className="py-4 text-xl font-semibold text-red-600">
              No Items Available
            </h1>
          ) : (
            <TodoItems
              todos={todos}
              handleDeleteBtn={handleDeleteBtn}
              handleEditBtn={handleEditBtn}
              toggleEdit={toggleEdit}
              setEditText={setEditText}
              handleCheckBoxInput={handleCheckBoxInput}
              setShowModal={setShowModal}
              editText={editText}
            />
          )}
        </div>
      </div>
    </TodoItemContext.Provider>
  );
};

export default App;
