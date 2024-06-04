import styles from "./ButtonContainer.module.css";
const ButtonContainer = ({ onButtonClick }) => {
  const Buttonkeys = [
    "AC",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonContainer}>
      {Buttonkeys.map((btnkey) => (
        <button key={btnkey} className={styles.button} onClick={onButtonClick}>
          {btnkey}
        </button>
      ))}
    </div>
  );
};
export default ButtonContainer;
