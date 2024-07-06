import React from "react";

const Message = () => {
  return (
    <div className="flex  ">
      <div className="px-3">
        <img
          className="w-10 rounded-full"
          src="public\passportPic.png"
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="">
        <span className="bg-white border-2 rounded-tl-none rounded-lg">
          Hello
        </span>
      </div>
    </div>
  );
};

export default Message;
