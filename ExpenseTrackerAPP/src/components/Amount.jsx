import React, { useContext } from "react";
import { GlobalContext } from "../context/context";

const Amount = () => {
  const { handleAmountInput, amount } = useContext(GlobalContext);

  return (
    <>
      <div className="flex items-start justify-start flex-col gap-1 w-[100%]">
        <label className="font-bold" htmlFor="Amount">
          Amount
        </label>
        <input
          value={amount}
          onChange={handleAmountInput}
          className="placeholder:text-gray-600 font-semibold border-[3px] py-1 px-2 border-blue-300 rounded-md outline-none w-full focus:border-blue-700 text-md"
          type="number"
          placeholder="Enter amount of expense"
        />
      </div>
    </>
  );
};

export default Amount;
