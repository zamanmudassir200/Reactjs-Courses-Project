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
            onClick={() => setBgColor("#DC2626")}
            className="text-white bg-red-600 py-3 px-5 rounded-2xl font-extrabold border-4 border-white"
          >
            Red
          </button>
          <button
            onClick={() => setBgColor("#1D4ED8")}
            className="text-white bg-blue-700 py-3 px-5 rounded-2xl font-extrabold border-4 border-white"
          >
            Blue
          </button>
          <button
            onClick={() => setBgColor("#15803D")}
            className="text-white bg-green-700 py-3 px-5 rounded-2xl font-extrabold border-4 border-white"
          >
            Green
          </button>
          <button
            onClick={() => setBgColor("#EA580C")}
            className="text-white bg-orange-600 py-3 px-5 rounded-2xl font-extrabold border-4 border-white"
          >
            Orange
          </button>
          <button
            onClick={() => setBgColor("#EAB308")}
            className="text-white bg-yellow-500 py-3 px-5 rounded-2xl font-extrabold border-4 border-white"
          >
            Yellow
          </button>
          <button
            onClick={() => setBgColor("#EC4899")}
            className="text-white bg-pink-500 py-3 px-5 rounded-2xl font-extrabold border-4 border-white"
          >
            Pink
          </button>
          <button
            onClick={() => setBgColor("#684122")}
            className="text-white bg-brown-700 py-3 px-5 rounded-2xl font-extrabold border-4 border-white"
          >
            Brown
          </button>
          <button
            onClick={() => setBgColor("#9333EA")}
            className="text-white bg-purple-600 py-3 px-5 rounded-2xl font-extrabold border-4 border-white"
          >
            Purple
          </button>
          <button
            onClick={() => setBgColor("#06B6D4")}
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
