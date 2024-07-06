import { list } from "postcss";
import React, { useState } from "react";

const Eight = () => {
  const [input, setInput] = useState("");
  const [todoItem, setTodoItem] = useState([]);
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleTodoItem = () => {
    if (input.trim() !== "") {
      setTodoItem([input, ...todoItem]);
      setInput("");
    }
  };
  const handleDeleteBtn = (index) => {
    const deleteItem = todoItem.filter((_, i) => i !== index);
    setTodoItem(deleteItem);
  };

  return (
    <div className="text-center my-4 ">
      <div className="fixed top-2 left-[45%]">
        <input
          type="text"
          placeholder="Enter todo item here..."
          value={input}
          onChange={handleInput}
          className="border-2  "
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleTodoItem();
            }
          }}
        />
        <button className="border-2" onClick={handleTodoItem}>
          Add{" "}
        </button>
      </div>
      <ul className="bg-gray-100 py-20">
        {todoItem.map((todo, index) => {
          return (
            <li
              key={index}
              className="py-2 w-[45%] mx-auto bg-white-200 border-2 border-black"
            >
              {todo}
              {"  "}
              <button
                onClick={() => handleDeleteBtn(index)}
                className="border-2 bg-red-600 px-3 py-2 rounded-md text-white"
              >
                Remove
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Eight;
