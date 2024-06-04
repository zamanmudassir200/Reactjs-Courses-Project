import styles from "./Display.module.css";
const Display = ({ display }) => {
  return (
    <input type="text" className={styles.display} value={display} readOnly />
  );
};
export default Display;
