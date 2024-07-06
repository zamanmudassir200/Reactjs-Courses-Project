import React, { useState } from "react";

const Three = () => {
  const [input, setInput] = useState("");
  //   const [showInputValue, setShowInputValue] = useState("");
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      3-
      <input
        type="text"
        value={input}
        onChange={handleInput}
        placeholder="Enter something.."
      />
      <p>User Input: {input}</p>
    </div>
  );
};

export default Three;
