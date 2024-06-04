import "./App.css";
import styles from "./App.module.css";
import Display from "./components/Display";
import Button from "./components/Button";

function App() {
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
    <>
      <div className={styles["main-container"]}>
        <div className={styles.calculator}>
          <Display></Display>
          <div className={styles.buttonContainer}>
            <Button ButtonKeys={Buttonkeys}></Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
