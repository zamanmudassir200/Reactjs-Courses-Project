import React from "react";
import styles from "./Form.module.css";
import Button from "../Button/Button";

const Form = ({ onSubmit }) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <div className={styles.form}>
          <div className={styles.form_control}>
            <input
              className={styles["form-inputs"]}
              type="text"
              id="name"
              placeholder=" "
            />
            <label htmlFor="name">Name</label>
          </div>
          <div className={styles.form_control}>
            <input
              className={styles["form-inputs"]}
              type="email"
              id="email"
              placeholder=" "
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className={styles.form_control}>
            <textarea
              className={styles["form-inputs"]}
              id="text"
              rows={5}
              placeholder=" "
            />
            <label htmlFor="text">Text</label>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <Button text="Submit" />
        </div>
      </form>
    </>
  );
};

export default Form;
