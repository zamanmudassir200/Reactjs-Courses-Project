import React from "react";
import styles from "./Button.module.css";
const Button = ({ text, icon, isOutline, ...rest }) => {
  return (
    <div>
      <button
        {...rest}
        className={isOutline ? styles.secondary_btn : styles.primary_btn}
      >
        {icon}
        {text}
      </button>
    </div>
  );
};

export default Button;
