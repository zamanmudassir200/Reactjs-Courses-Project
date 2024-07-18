import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills/Skills.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div>
        <Router>
          <div className="">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/skills" element={<Skills />}></Route>
              <Route path="/projects" element={<Projects />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
            </Routes>
          </div>
        </Router>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default App;
