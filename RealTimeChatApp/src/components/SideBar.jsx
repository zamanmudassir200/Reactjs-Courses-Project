import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";
const SideBar = () => {
  return (
    <div className="flex-[0.5] border-r-2 bg-gray-900 text-white">
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
};

export default SideBar;
