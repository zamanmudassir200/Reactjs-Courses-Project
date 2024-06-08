import React from "react";

const AddBtn = ({ handleAddButton }) => {
  return (
    <button
      onClick={handleAddButton}
      className="px-4 py-2 rounded-xl hover:bg-blue-600 transition-all bg-blue-900 text-white "
    >
      Add
    </button>
  );
};

export default AddBtn;
