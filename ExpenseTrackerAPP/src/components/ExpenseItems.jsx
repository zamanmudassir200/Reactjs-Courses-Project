import React, { useContext } from "react";
import { GlobalContext } from "../context/context";

const ExpenseItems = () => {
  const { expenseItemsArr, handleDeleteBtn } = useContext(GlobalContext);
  return (
    <div className="flex w-full justify-center items-center">
      <ul className=" rounded-xl  w-[90%] md:w-[45%] my-4 flex items-center flex-col justify-center">
        {expenseItemsArr && expenseItemsArr.length > 0
          ? expenseItemsArr.map((item, i) => (
              <li
                className="hover:bg-blue-300 flex justify-between items-center cursor-pointer border-2 rounded-lg border-blue-900 bg-blue-400 w-full py-2 px-4 my-1 text-black"
                key={i}
              >
                <div className="">
                  <h1 className="inline font-bold text-lg">{item.name}</h1>
                  <p className="font-semibold"> {item.amount} Rs</p>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <button
                    onClick={() => handleDeleteBtn(i, item.amount)}
                    className="border-2 border-blue-900 p-2 rounded-xl font-semibold hover:bg-blue-900 hover:text-white"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default ExpenseItems;
