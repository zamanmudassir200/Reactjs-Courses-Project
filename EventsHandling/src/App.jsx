import { useState, useRef } from "react";
import "./App.css";
import Navbar from "./Navbar";

function App() {
  const [counter, setCounter] = useState(0);
  const [incrementIntervalId, setIncrementIntervalId] = useState(null);
  const [decrementIntervalId, setDecrementIntervalId] = useState(null);

  const startIncrementing = () => {
    if (incrementIntervalId === null) {
      const id = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, 100); // Adjust the interval duration as needed
      setIncrementIntervalId(id);
    }
  };

  const startDecrementing = () => {
    if (incrementIntervalId !== null) {
      clearInterval(incrementIntervalId);
      setIncrementIntervalId(null);
    }
    if (decrementIntervalId === null) {
      const id = setInterval(() => {
        setCounter((prevCounter) => {
          if (prevCounter > 0) {
            return prevCounter - 1;
          } else {
            clearInterval(id);
            setDecrementIntervalId(null);
            return 0;
          }
        });
      }, 100); // Adjust the interval duration as needed
      setDecrementIntervalId(id);
    }
  };

  return (
    <div className="counter-container">
      <button
        onMouseEnter={startIncrementing}
        onMouseLeave={startDecrementing}
        className="counter-button"
      >
        <div className="counter-display">Counter: {counter}</div>
        Hover me
      </button>
    </div>
  );
}
export default App;
