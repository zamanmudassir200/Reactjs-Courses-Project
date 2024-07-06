import React from "react";
import SideBar from "../components/SideBar";
import Chat from "../components/Chat";

const Home = () => {
  return (
    <div className="bg-slate-400 h-screen flex items-center justify-center">
      <div className=" overflow-hidden border-2 rounded-lg w-[70%] h-[80%] flex">
        <SideBar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
