import React, { useEffect, useState } from "react";

const Nine = () => {
  const [color, setColor] = useState("");
  const [input, setInput] = useState("");

  return (
    <div className="flex items-center flex-col">
      <div
        style={{ border: `2px solid ${color}` }}
        className={`w-[200px] h-[200px] border-gray-700  border-2 my-4 text-center`}
      >
        Click me to change background color
      </div>
      <input
        style={{ background: color }}
        className={`border-2 p-2 w-[260px]`}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Enter color here...and press enter"
        value={input}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setColor(input);
            setInput("");
          }
        }}
      />
    </div>
  );
};

export default Nine;
