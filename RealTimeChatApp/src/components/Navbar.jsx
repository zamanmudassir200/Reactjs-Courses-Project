import React from "react";

const Navbar = () => {
  return (
    <div className="flex bg-slate-700 h-[60px] text-white items-center justify-between p-2 ">
      <span className="font-extrabold">ChatApp</span>
      <div className="flex items-center gap-3">
        <img
          className="w-10 rounded-full object-cover"
          src="public\passportPic.png"
          alt=""
        />
        <span>Mudassir</span>
        <button className="bg-slate-500  text-white p-1 rounded-lg">
          LogOut
        </button>
      </div>
    </div>
  );
};

export default Navbar;
