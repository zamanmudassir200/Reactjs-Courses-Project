import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Weight from "./components/Weight";
import Height from "./components/Height";
import CalculateBtn from "./components/CalculateBtn";
import ReloadBtn from "./components/ReloadBtn";
import DisplayBmi from "./components/DisplayBmi";
import Inches from "./components/Inches";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [inches, setInches] = useState("");
  const [bmi, setBmi] = useState("");
  const [bmiStatus, setBmiStatus] = useState("");
  const [error, setError] = useState("");

  const handleWeightInput = (e) => {
    setWeight(e.target.value);
  };
  const handleHeightFeet = (e) => {
    setHeight(e.target.value);
  };
  const handleHeightInches = (e) => {
    setInches(e.target.value);
    console.log(inches);
  };

  const reload = () => {
    setWeight("");
    setHeight("");
    setBmi("");
    setBmiStatus("");
    setError("");
  };

  const handleCalculate = () => {
    let newHeight = height.split("'");
    // console.log(typeof newHeight);
    let feet = newHeight[0] * 12;
    // console.log(feet);
    // console.log(typeof feet);
    if (newHeight[1] > 0 && newHeight < 12) {
      console.log("you write correct inches");
    }

    let inches = newHeight[1] % 12;
    // console.log(inches);
    inches = Number(inches);
    // console.log(typeof inches);
    let finalHeight = feet + inches;
    finalHeight = finalHeight * 0.0254;
    // console.log(finalHeight);

    // console.log(typeof newHeight);
    let BMI = weight / (finalHeight * finalHeight);
    BMI = BMI.toFixed(1);
    if (weight.length !== 0 && height.length !== 0 && inches.length !== 0) {
      if (weight == 0 || height == 0) {
        alert("Values cant be in 0");
      }
      {
        if (BMI < 18.5) {
          setBmi(BMI);
          setBmiStatus(`You are UNDERWEIGHT`);
          setError("");
        } else if (BMI >= 18.5 && BMI < 25) {
          setBmi(BMI);
          setError("");
          setBmiStatus(`You are NORMAL`);
        } else if (BMI >= 25 && BMI <= 30) {
          setBmi(BMI);
          setError("");
          setBmiStatus(`You are OVERWEIGHT`);
        } else {
          setBmi(BMI);
          setBmiStatus(`You are OBESE`);
          setError("");
        }
      }
    } else {
      setError("Please enter the weight and height first");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen  px-10 w-[100vw] mx-auto">
        <div className=" flex flex-col items-center justify-start py-[40px] px-10 gap-5 h-[75vh] w-[500px] border-gray-800 border-2 rounded-2xl">
          <Header />
          <Weight
            handleWeightInput={handleWeightInput}
            weight={weight}
            setWeight={setWeight}
          />
          {/* <div className="flex gap-3 mt-1"> */}
          <Height
            handleHeightFeet={handleHeightFeet}
            height={height}
            setHeight={setHeight}
            handleHeightInches={handleHeightInches}
            inches={inches}
          />
          {/* <Inches handleHeightInches={handleHeightInches} inches={inches} /> */}
          {/* </div> */}
          <div className="">
            <h1 className="text-red-700 text-center">{error}</h1>
          </div>
          <div className="flex gap-2">
            <CalculateBtn handleCalculate={handleCalculate} />
            <ReloadBtn reload={reload} />
          </div>

          <div className="p-2 border-2 rounded-lg border-slate-900">
            <DisplayBmi bmi={bmi} bmiStatus={bmiStatus} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
