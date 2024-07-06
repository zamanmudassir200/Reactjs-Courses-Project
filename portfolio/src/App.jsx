import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills/Skills.jsx";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  const [showNavItems, setShowNavItems] = useState(false);
  const [showNavIcon, setShowNavIcon] = useState(true);
  const handleShowItems = () => {
    setShowNavItems(true);
    setShowNavIcon(false);
  };
  const handleHideItems = () => {
    setShowNavItems(false);
    setShowNavIcon(true);
  };
  return (
    <>
      <div>
        <Router>
          <div className="">
            <Navbar
              showNavItems={showNavItems}
              showNavIcon={showNavIcon}
              handleShowItems={handleShowItems}
              handleHideItems={handleHideItems}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Home
                      showNavItems={showNavItems}
                      showNavIcon={showNavIcon}
                      handleShowItems={handleShowItems}
                      handleHideItems={handleHideItems}
                    />
                  </>
                }
              ></Route>
              <Route
                path="/skills"
                element={
                  <Skills
                    showNavItems={showNavItems}
                    showNavIcon={showNavIcon}
                    handleShowItems={handleShowItems}
                    handleHideItems={handleHideItems}
                  />
                }
              ></Route>
              <Route
                path="/projects"
                element={
                  <Projects
                    showNavItems={showNavItems}
                    showNavIcon={showNavIcon}
                    handleShowItems={handleShowItems}
                    handleHideItems={handleHideItems}
                  />
                }
              ></Route>
              <Route
                path="/contact"
                element={
                  <Contact
                    showNavItems={showNavItems}
                    showNavIcon={showNavIcon}
                    handleShowItems={handleShowItems}
                    handleHideItems={handleHideItems}
                  />
                }
              ></Route>
            </Routes>
          </div>
        </Router>
      </div>
      <div>
        <Footer
          showNavItems={showNavItems}
          showNavIcon={showNavIcon}
          handleShowItems={handleShowItems}
          handleHideItems={handleHideItems}
        />
      </div>
    </>
  );
};

export default App;
