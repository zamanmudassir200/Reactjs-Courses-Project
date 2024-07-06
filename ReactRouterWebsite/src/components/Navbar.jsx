import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="bg-purple-600 text-white py-4">
        <nav className="flex items-center justify-between max-w-[1200px] mx-auto">
          <div className="">
            <h1 className="text-2xl first-letter:text-green-500 first-letter:text-4xl first-letter:font-extrabold">
              logo
            </h1>
          </div>
          <div className="">
            <ul className="flex gap-5 font-semibold">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
              <li>
                <NavLink to="/projects">Projects</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
