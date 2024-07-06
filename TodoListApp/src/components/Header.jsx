import React from "react";
import TodoInput from "./TodoInput";

const Header = () => {
  return (
    <>
      <h1 className=" sticky top-0 h-[200px] bg-purple-600 w-full text-center text-white font-bold py-4 text-3xl rounded-lg ">
        TODO List
        <div className="grid place-items-center w-full">
          <TodoInput />
        </div>
      </h1>
    </>
  );
};

export default Header;
