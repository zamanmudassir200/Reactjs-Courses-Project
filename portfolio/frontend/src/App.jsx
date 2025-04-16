import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills/Skills.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Login from "./components/Auth/Login.jsx";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard.jsx";
import { ToastContainer } from "react-toastify";
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
            <Route path="/login" element={<Login />}></Route>
            <Route path="/admin-dashboard" element={<AdminDashboard />}></Route>
          </Routes>
        </div>
      </div>
      <div>
        <Footer />
      </div>
      <ToastContainer />
    </>
  );
};

export default App;
