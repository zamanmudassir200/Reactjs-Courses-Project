import styles from "./Button.module.css";

const Button = ({ ButtonKeys }) => {
  return (
    <>
      {ButtonKeys.map((btnKey) => (
        <button key={btnKey} className={styles.button}>
          {btnKey}
        </button>
      ))}
    </>
  );
};

export default Button;
