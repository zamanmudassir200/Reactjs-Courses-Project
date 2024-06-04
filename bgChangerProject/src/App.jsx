import { useState } from "react";
import "./App.css";

function App() {
  const [bgcolor, setBgColor] = useState("white");
  return (
    <>
      <div
        className="grid place-items-center h-[100vh] max-w-full my-0 mx-auto px-3"
        style={{ backgroundColor: bgcolor }}
      >
        <h1 className="text-2xl font-extrabold underline text-center">
          Background Color Changer
        </h1>
        <div className="flex flex-wrap gap-5 justify-center items-center bg-gray-600 max-w-[1200px] rounded-lg my-0 mx-auto p-5">
          <button
            onClick={() => setBgColor("red")}
            className="text-white bg-red-600 py-3 px-5 rounded-2xl font-extrabold border-4 border-white"
          >
            Red
          </button>
          <button
            onClick={() => setBgColor("blue")}
            className="text-white bg-blue-700 py-3 px-5 rounded-2xl font-extrabold border-4 border-white"
          >
            Blue
          </button>
          <button
            onClick={() => setBgColor("green")}
            className="text-white bg-green-700 py-3 px-5 rounded-2xl font-extrabold border-4 border-white"
          >
            Green
          </button>
          <button
            onClick={() => setBgColor("orange")}
            className="text-white bg-orange-600 py-3 px-5 rounded-2xl font-extrabold border-4 border-white"
          >
            Orange
          </button>
          <button
            onClick={() => setBgColor("yellow")}
            className="text-white bg-yellow-500 py-3 px-5 rounded-2xl font-extrabold border-4 border-white"
          >
            Yellow
          </button>
          <button
            onClick={() => setBgColor("pink")}
            className="text-white bg-pink-500 py-3 px-5 rounded-2xl font-extrabold border-4 border-white"
          >
            Pink
          </button>
          <button
            onClick={() => setBgColor("brown")}
            className="text-white bg-brown-700 py-3 px-5 rounded-2xl font-extrabold border-4 border-white"
          >
            Brown
          </button>
          <button
            onClick={() => setBgColor("purple")}
            className="text-white bg-purple-600 py-3 px-5 rounded-2xl font-extrabold border-4 border-white"
          >
            Purple
          </button>
          <button
            onClick={() => setBgColor("cyan")}
            className="text-white bg-cyan-500 py-3 px-5 rounded-2xl font-extrabold border-4 border-white"
          >
            Cyan
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
