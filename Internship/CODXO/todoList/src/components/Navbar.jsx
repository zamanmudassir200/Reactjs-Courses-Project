import React from "react";

const Navbar = () => {
  return (
    <header className="bg-purple-800">
      <nav>
        <div className="">
          <img className="w-[80px] h-[80px]" src="todo.png" alt="Todo" />
        </div>
        <div className="div">
          <h1>Todo List</h1>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
