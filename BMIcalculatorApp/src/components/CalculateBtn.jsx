import React from "react";

const CalculateBtn = ({ handleCalculate }) => {
  return (
    <button
      onClick={handleCalculate}
      className="bg-purple-500 text-white py-2 px-4 rounded-xl w-[100%] hover:bg-purple-900"
    >
      Calculate
    </button>
  );
};

export default CalculateBtn;
