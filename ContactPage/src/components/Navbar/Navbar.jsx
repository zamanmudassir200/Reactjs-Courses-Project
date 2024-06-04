import React from "react";
import styles from "./Navbar.module.css";
// import "/src/App.css";
const Navbar = () => {
  return (
    <div className={`${styles.nav} `}>
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
