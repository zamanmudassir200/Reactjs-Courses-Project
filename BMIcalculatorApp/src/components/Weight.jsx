import React from "react";

const Weight = ({ weight, handleWeightInput }) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label htmlFor="weight" className="font-bold text-md">
        Weight (Kg)
      </label>
      <input
        onChange={handleWeightInput}
        className="border-[3px] py-1 px-2 border-purple-300 rounded-md outline-none w-[100%] focus:border-purple-600 text-md"
        type="number"
        value={weight}
        placeholder="e.g, 60"
      />
    </div>
  );
};

export default Weight;
