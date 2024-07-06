import React, { useContext } from "react";
import { GlobalContext } from "../context/context";

const TotalExpense = () => {
  const { totalRs } = useContext(GlobalContext);
  return <span className="font-bold text-2xl ">Total: {totalRs} Rs</span>;
};

export default TotalExpense;
