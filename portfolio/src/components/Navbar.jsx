import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <>
      <header>
        <nav>
          <div className={styles.logo}>
            <h2>
              Port<span>folio</span>
            </h2>
          </div>
          <div className={styles["nav-items"]}>
            <ul>
              <li>
                <Link className={styles["nav-link"]} to="/">
                  HOME
                </Link>
              </li>
              <li>
                <Link className={styles["nav-link"]} to="/about">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link className={styles["nav-link"]} to="/projects">
                  PROJECTS
                </Link>
              </li>
              <li>
                <Link className={styles["nav-link"]} to="/contact">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
