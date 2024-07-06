import React from "react";

const Search = () => {
  return (
    <div>
      <div className="border-b-[1px]">
        <input
          className="w-full  outline-none font-semibold   px-2 py-2 bg-slate-500"
          type="text"
          placeholder="Find a user"
        />
      </div>
      <div className="flex mt-3 border-b-[1px] border-gray-600  hover:bg-slate-700 p-2  cursor-pointer transition-all items-center pl-4 gap-2">
        <img
          className="w-[65px] rounded-full"
          src="public\passportPic.png"
          alt=""
        />
        <div className="">
          <span className="font-bold">Mudassir</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
