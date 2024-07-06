import React from "react";
import {
  BrowserRouter,
  Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

const Ten = () => {
  return (
    <BrowserRouter>
      <nav className="flex bg-blue-500 text-white py-2 px-3 items-center justify-center">
        <ul className="flex gap-3">
          <NavLink
            className="hover:bg-blue-600  px-3 py-2 rounded-md transition-all"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            className="hover:bg-blue-600 px-3 py-2 rounded-md transition-all"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            className="hover:bg-blue-600 px-3 py-2 rounded-md transition-all"
            to="/contact"
          >
            CONTACT
          </NavLink>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Ten;
