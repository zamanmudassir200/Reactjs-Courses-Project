import React, { useContext } from "react";
import { IoAddCircle } from "react-icons/io5";
import TodoContext from "../context/TodoContext";

const TodoInput = () => {
  const {
    task,
    dateInput,
    handleTaskInput,
    handleAddBtn,
    inputRef,
    handleDateInput,
  } = useContext(TodoContext);

  return (
    <div className="top-[100px] sm:min-w-[90%] min-w-[10%] w-[90%] rounded-lg bg-white fixed sm:py-10 py-6 px-10 flex flex-col gap-5 items-center justify-center shadow-lg">
      <div className="flex flex-wrap items-center justify-center gap-2 ">
        <input
          onChange={handleTaskInput}
          value={task}
          ref={inputRef}
          className="text-black w-[8em] placeholder:text-[12px] sm:placeholder:text-lg rounded-lg mx-2 border-b-[6px] sm:w-[300px] text-xl border-gray-300 focus:outline-none transition-colors hover:border-purple-800 focus:border-purple-800"
          type="text"
          placeholder="What would you like to do?"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAddBtn();
            }
          }}
        />
        <input
          type="date"
          value={dateInput}
          placeholder="Enter date"
          className="border-0 focus:outline-none  cursor-pointer rounded-lg text-gray-400 text-lg border-b-[6px] border-gray-300  hover:border-purple-800 focus:border-purple-800"
          onChange={handleDateInput}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAddBtn();
            }
          }}
        />
      </div>
      <button
        onClick={handleAddBtn}
        className="flex justify-center items-center py-3 sm:w-[100px] w-[50px]  hover:scale-110 bg-orange-600 text-white font-bold text-xl rounded-md hover:bg-orange-700 transition-all"
      >
        <IoAddCircle style={{ width: "30px", height: "30px" }} />
      </button>
    </div>
  );
};

export default TodoInput;
