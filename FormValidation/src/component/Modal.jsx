import React, { useState } from "react";

const Modal = ({ isVisble, onClose, children }) => {
  if (!isVisble) {
    return null;
  }
  const handleOnClose = (e) => {
    if (e.target.id === "wrapper") {
      onClose();
    }
  };
  return (
    <div
      onClick={handleOnClose}
      id="wrapper"
      className="fixed inset-0 left-0 bg-black bg-opacity-25 drop-shadow-xl flex items-center justify-center "
    >
      <div className="flex sm:w-[60%] max-w-[80%] mx-[20px] flex-col shadow-xl ">
        <button
          onClick={onClose}
          className=" place-self-end bg-white p-2 rounded-full sm:p-5"
        >
          X
        </button>
        <div className="bg-white break-words brea h-[500px] p-4 rounded-md text-xl mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
