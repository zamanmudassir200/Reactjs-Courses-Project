import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext(null);

export const GlobalState = ({ children }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [expenseItemsArr, setExpenseItemsArr] = useState([]);
  const [totalRs, setTotalRs] = useState(0);

  useEffect(() => {
    const storedExpenseItems = JSON.parse(
      window.localStorage.getItem("expenseItemsArr")
    );
    const storedTotalRs = JSON.parse(window.localStorage.getItem("totalRs"));

    if (storedExpenseItems) {
      setExpenseItemsArr(storedExpenseItems);
    }
    if (storedTotalRs) {
      setTotalRs(storedTotalRs);
    }
  }, []);

  const handleNameInput = (e) => {
    setName(e.target.value);
  };

  const handleAmountInput = (e) => {
    setAmount(e.target.value);
  };

  const handleAddButton = () => {
    if (name.length !== 0 && amount.length !== 0) {
      const newExpenseItem = {
        name: name,
        amount: parseFloat(amount),
      };

      const updatedExpenseItemsArr = [...expenseItemsArr, newExpenseItem];
      const updatedTotalRs = totalRs + newExpenseItem.amount;

      setExpenseItemsArr(updatedExpenseItemsArr);
      setTotalRs(updatedTotalRs);

      window.localStorage.setItem(
        "expenseItemsArr",
        JSON.stringify(updatedExpenseItemsArr)
      );
      window.localStorage.setItem("totalRs", JSON.stringify(updatedTotalRs));
      setName("");
      setAmount("");
    }
  };

  const handleClearAllButton = () => {
    setExpenseItemsArr([]);
    setTotalRs(0);
    window.localStorage.removeItem("expenseItemsArr");
    window.localStorage.removeItem("totalRs");
  };

  const handleDeleteBtn = (getId, getPrice) => {
    const updatedItems = expenseItemsArr.filter((_, id) => id !== getId);
    const updateAmount = totalRs - getPrice;
    setTotalRs(updateAmount);
    setExpenseItemsArr(updatedItems);
    window.localStorage.setItem(
      "expenseItemsArr",
      JSON.stringify(updatedItems)
    );
    window.localStorage.setItem("totalRs", JSON.stringify(updateAmount));
  };

  return (
    <GlobalContext.Provider
      value={{
        name,
        amount,
        expenseItemsArr,
        totalRs,
        handleNameInput,
        handleAmountInput,
        handleAddButton,
        handleClearAllButton,
        handleDeleteBtn,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
