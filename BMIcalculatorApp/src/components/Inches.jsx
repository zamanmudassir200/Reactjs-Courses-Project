import React from "react";

const Inches = ({ handleHeightInches, inches }) => {
  return (
    <div>
      <input
        onChange={handleHeightInches}
        className="border-[3px] py-1 px-2 border-purple-300 rounded-md outline-none w-full focus:border-purple-600 text-md"
        type="number"
        value={inches}
        placeholder="Enter Inches"
      />
    </div>
  );
};

export default Inches;
