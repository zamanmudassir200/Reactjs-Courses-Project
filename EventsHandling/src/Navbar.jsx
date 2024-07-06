import React from "react";
import MouseOver from "./MouseOver";
import { useState } from "react";
const Navbar = () => {
  const [showComponet, setShowComponent] = useState(null);
  const handleMouseOver = () => {
    setShowComponent(<MouseOver />);
    alert("mouse");
  };
  return (
    <div className="w-full">
      <header className="w-full bg-red-600">
        <nav className=" flex justify-between items-center px-5 py-6 w-full">
          <div className="">
            <h1>logo</h1>
          </div>
          <div className="">
            <ul className="flex gap-5">
              <a href="#" onMouseOver={handleMouseOver}>
                HOME
              </a>
              <a href="#">ABOUT</a>
              <a href="#">CONTACT</a>
              <a href="#">SERVICES</a>
            </ul>
          </div>
        </nav>
      </header>
      {}
    </div>
  );
};

export default Navbar;
