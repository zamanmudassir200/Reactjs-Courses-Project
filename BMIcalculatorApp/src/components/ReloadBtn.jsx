import React from "react";

const ReloadBtn = ({ reload }) => {
  return (
    <button
      onClick={reload}
      className="bg-purple-500 text-white py-2 px-4 rounded-xl max-w-full hover:bg-purple-900"
    >
      Reload
    </button>
  );
};

export default ReloadBtn;
