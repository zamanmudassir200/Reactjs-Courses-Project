import React from "react";

const Height = ({ height, inches, handleHeightFeet, handleHeightInches }) => {
  return (
    // <div className="flex flex-col gap-3 w-full">
    //   {/* <div className=""> */}
    //   <label htmlFor="height" className="font-bold text-md">
    //     Height (ft)
    //   </label>
    //   <div className=" gap-3 mt-1">
    //     <input
    //       onChange={handleHeightFeet}
    //       className="border-[3px] py-1 px-2 border-purple-300 rounded-md outline-none w-full focus:border-purple-600 text-md"
    //       type="number"
    //       value={height}
    //       placeholder="Enter Feet"
    //     />
    //     {/* <input
    //         onChange={handleHeightInches}
    //         className="border-[3px] py-1 px-2 border-purple-300 rounded-md outline-none w-full focus:border-purple-600 text-md"
    //         type="number"
    //         value={inches}
    //         placeholder="Enter Inches"
    //       /> */}
    //   </div>
    // </div>
    // </div>
    <div className="flex flex-col gap-1 w-full">
      <label htmlFor="weight" className="font-bold text-md">
        Height (ft)
      </label>
      <input
        onChange={handleHeightFeet}
        className="border-[3px] py-1 px-2 border-purple-300 rounded-md outline-none w-[100%] focus:border-purple-600 text-md"
        type="text"
        value={height}
        placeholder="e.g, 5'4"
      />
    </div>
  );
};

export default Height;
