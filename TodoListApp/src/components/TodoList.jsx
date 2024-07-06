import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import TodoContext from "../context/TodoContext";

const TodoList = () => {
  const {
    todos,
    handleCheckBoxInput,
    toggleEdit,
    handleEditBtn,
    handleDeleteBtn,
    setEditText,
    editText,
    setShowModal,
  } = useContext(TodoContext);

  return (
    <ul className="mt-[20px] flex pt-[20px] my-4 rounded-lg flex-col items-center justify-center sm:justify-start gap-3 w-[100%] sm:w-[96%]">
      {todos.length === 0 ? (
        <h1 className="py-2 text-xl font-semibold text-red-600">
          No Items Available
        </h1>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleCheckBoxInput={handleCheckBoxInput}
            toggleEdit={toggleEdit}
            handleEditBtn={handleEditBtn}
            handleDeleteBtn={handleDeleteBtn}
            setEditText={setEditText}
            editText={editText}
            setShowModal={setShowModal}
          />
        ))
      )}
    </ul>
  );
};

export default TodoList;
