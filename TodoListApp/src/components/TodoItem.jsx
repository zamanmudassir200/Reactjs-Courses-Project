import React, { useContext } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import TodoContext from "../context/TodoContext";

const TodoItem = ({ todo }) => {
  const {
    handleCheckBoxInput,
    toggleEdit,
    handleEditBtn,
    handleDeleteBtn,
    setEditText,
    editText,
    setShowModal,
  } = useContext(TodoContext);

  return (
    <li className="flex justify-center sm:items-center w-[100%] p-4 border-4 text-center sm:text-left flex-wrap sm:flex-nowrap sm:flex-row cursor-pointer border-orange-600 gap-2 rounded-xl">
      <div className="flex items-center justify-start gap-1 w-[300%]">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleCheckBoxInput(todo.id)}
          className="cursor-pointer"
        />
        {todo.isEditing ? (
          <input
            className="text-black font-extrabold border-none focus:outline-none w-[100%] text-2xl"
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={() => handleEditBtn(todo.id, editText)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                if (editText.trim() !== "") {
                  handleEditBtn(todo.id, editText);
                } else {
                  setShowModal(true);
                }
              }
            }}
            autoFocus
          />
        ) : (
          <span
            className={`flex items-center justify-center font-bold ml-2 text-lg ${
              todo.completed ? "line-through" : ""
            }`}
            onClick={() => {
              setEditText(todo.text); // Set current text to state for editing
            }}
          >
            {todo.text}
          </span>
        )}
      </div>
      <div className="flex w-full p-2 justify-center items-center sm:justify-end gap-4">
        <button
          disabled={todo.completed}
          onClick={() => toggleEdit(todo.id)}
          className={`p-4 bg-orange-600 rounded-md ${
            todo.completed && "cursor-not-allowed opacity-50"
          } text-white font-bold hover:bg-orange-500 transition-all`}
        >
          <FaEdit />
        </button>
        <button
          onClick={() => handleDeleteBtn(todo.id)}
          className={`p-4 bg-orange-600 rounded-md text-white font-bold hover:bg-orange-500  transition-all`}
        >
          <MdDelete />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
