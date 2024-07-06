import React from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import Messages from "./Messages";
import Input from "./Input";
const Chat = () => {
  return (
    <div className="relative overflow-y-scroll flex-1">
      <div className="h-[60px] sticky top-0 flex items-center justify-between px-2 text-white bg-slate-700">
        <span className="font-bold">Mudassir</span>
        <div className="">
          <HiOutlineDotsHorizontal className="font-bold" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
