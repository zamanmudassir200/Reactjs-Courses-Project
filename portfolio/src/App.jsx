import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills/Skills.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div>
        <div className="">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <Skills />
                  <Projects />
                  <Contact />
                </>
              }
            ></Route>
            <Route path="/skills" element={<Skills />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default App;
