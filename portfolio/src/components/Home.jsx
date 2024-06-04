import React from "react";
import styles from "./Home.module.css";
import Footer from "./Footer";

const Home = () => {
  return (
    <section className={styles["hero-section"]}>
      <div className={styles.container}>
        <div
          className={`${styles["image-container"]} animate__animated animate__bounceInLeft `}
        >
          <img src="public\profile.jpg" alt="Profile" />
        </div>
        <div className={styles["hero-content"]}>
          <h1>
            <span className={styles["hi-text"]}>Hi</span>{" "}
            <span className={styles.Iam}>, I am </span>
            <span className={styles["name-text"]}>M.Mudassir Zaman </span>
            <h2 className={styles["dev"]}>Frontend Developer</h2>
          </h1>
          <div className={styles.Cv}>
            <a href="public\Resume.pdf" target="_blank">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
