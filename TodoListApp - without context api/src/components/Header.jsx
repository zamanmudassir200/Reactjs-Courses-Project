import React from "react";
import { IoAddCircle } from "react-icons/io5";

const Header = ({ inputRef, task, handleTaskInput, handleAddBtn }) => {
  return (
    <>
      <h1 className=" sticky top-0 h-[200px] bg-purple-600 w-full text-center text-white font-bold py-4 text-3xl rounded-lg ">
        TODO List
        <div className="grid place-items-center w-full">
          <div className="top-[80px] sm:min-w-[90%] min-w-[10%] w-[90%] rounded-lg bg-white absolute py-10 px-10 flex flex-col gap-8 items-center justify-center shadow-lg ">
            <div
              className="flex flex-wrap 
              "
            >
              <input
                onChange={handleTaskInput}
                value={task}
                ref={inputRef}
                className="text-black w-[8em]  placeholder:text-[12px] sm:placeholder:text-lg mx-2 border-b-2 sm:w-[300px] text-xl border-gray-600 focus:outline-none"
                type="text"
                placeholder="What would you like to do?"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleAddBtn();
                  }
                }}
              />
            </div>
            <button
              onClick={handleAddBtn}
              className="flex justify-center items-center py-3 sm:w-[100px] w-[50px] bg-orange-600 text-white font-bold text-xl rounded-md hover:bg-orange-700 transition-all"
            >
              <IoAddCircle />
            </button>
          </div>
        </div>
      </h1>
    </>
  );
};

export default Header;
