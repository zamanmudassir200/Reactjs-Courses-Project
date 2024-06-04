import { useState } from "react";
import TailwindTest from "./TailwindTest";
import "./App.css";

function App() {
  let [counterValue, setCounterValue] = useState(0);

  const increamentCounter = () => {
    for (let counterValue = 0; counterValue <= 1000; counterValue++) {
      setCounterValue(`${counterValue} is here...`);
    }
    // if (counterValue + 1 > 20) {
    //   alert("you cannot exceed above 20");
    // } else {
    //   setCounterValue(counterValue + 1);
    // }
  };
  const decreamentCounter = () => {
    for (let counterValue = 1000; counterValue >= 0; counterValue--) {
      setCounterValue(counterValue);
    }
    // if (counterValue - 1 < 0) {
    //   alert("You cannot in negative ");
    // } else {
    //   setCounterValue(counterValue - 1);
    // }
  };
  return (
    <>
      <div className="my-10">
        <h1 className="font-semibold bg-green-800 p-5 rounded-lg my-6">
          Counter App
        </h1>
        <p className="my-4 ">The value of counter is {counterValue}</p>
        <button className="mr-3" onClick={increamentCounter}>
          Increament - {counterValue}
        </button>
        <button onClick={decreamentCounter}>Decrement - {counterValue}</button>
      </div>
      <TailwindTest />
    </>
  );
}

export default App;
