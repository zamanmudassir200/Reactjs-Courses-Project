import "./App.css";
import { useReducer } from "react";
const initialState = 0;
// const inputValue = "";

const reducer = (state, action) => {
  switch (action) {
    case "Increment":
      return state + 1;

    case "Decrement":
      return state - 1;
      Default: return state;
  }
};

function App() {
  // const handleInput = (e) => {
  //   const inputFunction = (state, action) => {
  //     // action = state()
  //   };
  // };
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [input, setInput] = useReducer(inputFunction, inputValue);
  return (
    <>
      <p> Count = {state}</p>
      <button onClick={() => dispatch("Increment")}> + </button>
      <button onClick={() => dispatch("Decrement")}> - </button>

      {/* <div className="">
        <input type="text" onChange={() => dispatch()} value={input} />
        <button onClick={handleAddBtn}>Add</button>
      </div> */}
    </>
  );
}

export default App;
