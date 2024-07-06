import React from "react";

const Chats = () => {
  return (
    <div className="">
      <div className="flex mt-3 border-b-[1px] border-gray-600  hover:bg-slate-700 p-2  cursor-pointer transition-all items-center pl-4 gap-2">
        <img
          className="w-[65px] rounded-full"
          src="public\passportPic.png"
          alt=""
        />
        <div className="">
          <span className="font-bold">Mudassir</span>
          <p className="text-gray-300">Hello</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
