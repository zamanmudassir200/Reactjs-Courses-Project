import React from "react";

const ExpenseItems = ({ expenseItemsArr }) => {
  return (
    <div className="flex w-full justify-center items-center">
      <ul className=" rounded-xl  w-[90%] md:w-[45%] my-4 flex items-center flex-col justify-center">
        {expenseItemsArr.map((item, i) => (
          <li
            className="hover:bg-blue-300 cursor-pointer border-2 rounded-lg border-blue-900 bg-blue-400 w-full py-2 px-4 my-1 text-black"
            key={i}
          >
            <h1 className="inline font-bold text-lg">{item.name}</h1>
            <p className="font-semibold"> {item.amount} Rs</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseItems;
