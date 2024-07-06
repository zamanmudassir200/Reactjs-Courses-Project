import React, { useContext } from "react";
import { GlobalContext } from "../context/context";

const Name = () => {
  const { handleNameInput, name } = useContext(GlobalContext);
  return (
    <>
      <div className="flex items-start justify-start flex-col gap-1 w-[100%]">
        <label htmlFor="Name" className="font-bold">
          Name
        </label>
        <input
          className="placeholder:text-gray-600 border-[3px] py-1 px-2 border-blue-300 rounded-md outline-none w-full focus:border-blue-700 text-md font-semibold"
          type="text"
          value={name}
          onChange={handleNameInput}
          placeholder="Enter name of expense"
        />
      </div>
    </>
  );
};

export default Name;
