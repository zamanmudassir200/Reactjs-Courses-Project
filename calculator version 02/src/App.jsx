import "./App.css";
import styles from "./App.module.css";
import Display from "./components/Display";
import { useState } from "react";
import ButtonContainer from "./components/ButtonContainer";

function App() {
  const [display, setDisplay] = useState("");
  const onButtonClick = (event) => {
    let btnKey = event.target.innerText;

    if (btnKey === "AC") {
      setDisplay("");
    } else if (btnKey === "=") {
      const result = eval(display);
      setDisplay(result);
    } else {
      const newDisplayValue = display + event.target.innerText;
      setDisplay(newDisplayValue);
    }
  };
  return (
    <>
      <div className={styles["main-container"]}>
        <div className={styles.calculator}>
          <Display display={display}></Display>
          <ButtonContainer
            onButtonClick={onButtonClick}
            className={styles.buttonContainer}
          ></ButtonContainer>
        </div>
      </div>
    </>
  );
}

export default App;
