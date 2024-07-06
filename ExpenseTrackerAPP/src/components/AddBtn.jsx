import React, { useContext } from "react";
import { GlobalContext } from "../context/context";

const AddBtn = () => {
  const { handleAddButton } = useContext(GlobalContext);
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
