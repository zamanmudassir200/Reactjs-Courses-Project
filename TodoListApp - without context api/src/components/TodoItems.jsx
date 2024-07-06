import React from "react";
import TodoItem from "./TodoItem";

const TodoItems = ({
  todos,
  handleDeleteBtn,
  handleEditBtn,
  toggleEdit,
  setEditText,
  handleCheckBoxInput,
  setShowModal,
  editText,
}) => {
  return (
    <>
      <ul className="mt-[20px] flex pt-[20px] my-4 rounded-lg flex-col items-center justify-center sm:justify-start gap-3 w-[100%] sm:w-[96%]">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleDeleteBtn={handleDeleteBtn}
            handleEditBtn={handleEditBtn}
            toggleEdit={toggleEdit}
            setEditText={setEditText}
            setShowModal={setShowModal}
            handleCheckBoxInput={handleCheckBoxInput}
            editText={editText}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoItems;
