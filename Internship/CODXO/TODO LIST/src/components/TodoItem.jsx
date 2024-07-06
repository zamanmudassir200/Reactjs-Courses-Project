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
    <li className=" sm:w-[80%] w-[100%] mb-4  sm:items-center border-orange-600  border-4   p-4 text-center sm:text-left  cursor-pointer gap-2 rounded-xl ">
      <div className="flex items-center gap-2 justify-center flex-wrap sm:flex-nowrap sm:flex-row">
        <div className="flex items-center justify-start gap-1 break-words w-[300%]">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleCheckBoxInput(todo.id)}
            className="cursor-pointer"
          />
          {todo.isEditing ? (
            <input
              className="text-black px-2 font-extrabold border-none focus:outline-none break-words w-[100%] text-xl"
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
            <>
              <span
                className={`flex items-start w-[100%] justify-start font-bold ml-2 text-lg  break-all flex-wrap gap-4 ${
                  todo.completed ? "line-through" : ""
                }`}
                onClick={() => {
                  setEditText(todo.text); // Set current text to state for editing
                }}
              >
                {todo.text}
              </span>
            </>
          )}
        </div>
        <div className="w-full text-lg">
          <p
            className={` ${
              todo.completed ? "line-through" : ""
            } text-center sm:text-end font-bold `}
          >
            {todo.date}
          </p>
        </div>
      </div>
      <div className="flex w-full  p-2 justify-center items-center sm:justify-end gap-4">
        <button
          disabled={todo.completed}
          onClick={() => toggleEdit(todo.id)}
          className={`p-4 bg-orange-600 rounded-md ${
            todo.completed && "cursor-not-allowed opacity-50"
          } text-white font-bold hover:bg-orange-500 transition-all`}
        >
          <FaEdit style={{ width: "20px", height: "20px" }} />
        </button>
        <button
          onClick={() => handleDeleteBtn(todo.id)}
          className="p-4  bg-orange-600 rounded-md text-white font-bold hover:bg-orange-500 transition-all"
        >
          <MdDelete style={{ width: "20px", height: "20px" }} />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
