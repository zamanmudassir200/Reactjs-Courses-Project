import React, { useState } from "react";

const DisplayBmi = ({ bmiStatus, bmi }) => {
  return (
    <>
      <h2
        className={`font-bold p-4 rounded-xl`}
      >{`Your BMI score is: ${bmi}`}</h2>
      <p
        className={`  ${bmi < 18.5 ? `bg-yellow-500 text-white` : null} ${
          bmi >= 18.5 && bmi < 25 ? `bg-green-600 text-white` : null
        } ${bmi >= 25 && bmi <= 30 ? `bg-red-600 text-white` : null} 
         ${
           bmi > 30 ? `bg-red-900 text-white` : null
         } text-center text-lg px-2 font-semibold rounded-md`}
      >
        {bmiStatus}
      </p>
    </>
  );
};

export default DisplayBmi;
