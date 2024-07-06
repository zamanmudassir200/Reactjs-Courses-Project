import React from "react";
import TodoInput from "./TodoInput";

const Header = () => {
  return (
    <>
      <div className="items-start gap-2 justify-center sticky top-[2px] h-[200px] bg-purple-600 w-full text-center text-white font-bold  text-3xl rounded-lg">
        <div className=" flex items-center justify-center gap-3  pt-3 pb-2">
          <img className="w-[60px] h-[60px]" src="todo.png" alt="Todo" />
          <h1 className=" ">TODO LIST</h1>
        </div>
      </div>
      <div className="grid place-items-center w-full">
        <TodoInput />
      </div>
    </>
  );
};

export default Header;
