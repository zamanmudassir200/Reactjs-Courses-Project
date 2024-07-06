import React from "react";

const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) {
    return null;
  }
  const handleCloseModal = (e) => {
    if (e.target.id == "wrapper") {
      onClose();
    }
  };
  return (
    <div
      onClick={handleCloseModal}
      className="fixed inset-0 bg-black px-5 bg-opacity-25 backdrop-blur-sm flex items-center justify-center"
      id="wrapper"
    >
      <div onClick={handleCloseModal} className="w-[600px] flex flex-col">
        <button
          onClick={onClose}
          className="place-self-end text-xl text-black bg-white py-2 px-3 rounded-full hover:bg-gray-300 transition-all"
        >
          X
        </button>
        <div className="bg-white px-6 py-7 rounded-lg text-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
