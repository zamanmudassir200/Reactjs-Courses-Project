import React from "react";

const ClearAllBtn = ({ handleClearAllButton }) => {
  return (
    <button
      onClick={handleClearAllButton}
      className="px-4 py-2 rounded-xl hover:bg-blue-600 transition-all bg-blue-900 text-white "
    >
      Clear All
    </button>
  );
};

export default ClearAllBtn;
