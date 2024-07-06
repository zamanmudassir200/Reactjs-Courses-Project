import React from "react";
import { IoIosAttach } from "react-icons/io";
import { GrGallery } from "react-icons/gr";
import { IoSend } from "react-icons/io5";

const Input = () => {
  return (
    <div className="sticky bottom-0 w-full bg-white h-[70px] px-3 mx-auto grid items-center">
      <div className="flex items-center justify-between ">
        <input
          type="text"
          className="w-full py-2 outline-none text-lg"
          placeholder="Type Something"
        />
        <div className="flex items-center justify-between gap-4">
          <input type="file" id="file" className="hidden" />
          <label htmlFor="file" className="flex items-center gap-2">
            <IoIosAttach className="text-2xl cursor-pointer" />
            <GrGallery className="text-2xl cursor-pointer" />
          </label>
          <button>
            <IoSend className="text-2xl cursor-pointer" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
