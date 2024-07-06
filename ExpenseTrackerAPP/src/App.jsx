import "./App.css";
import Header from "./components/Header";
import Name from "./components/Name";
import Amount from "./components/Amount";
import AddBtn from "./components/AddBtn";
import ClearAllBtn from "./components/ClearAllBtn";
import TotalExpense from "./components/TotalExpense";
import ExpenseItems from "./components/ExpenseItems";

const App = () => {
  // const [name, setName] = useState("");
  // const [amount, setAmount] = useState("");
  // const [expenseItemsArr, setExpenseItemsArr] = useState([]);
  // const [totalRs, setTotalRs] = useState(0);

  // useEffect(() => {
  //   const storedExpenseItems = JSON.parse(
  //     window.localStorage.getItem("expenseItemsArr")
  //   );
  //   const storedTotalRs = JSON.parse(window.localStorage.getItem("totalRs"));

  //   if (storedExpenseItems) {
  //     setExpenseItemsArr(storedExpenseItems);
  //   }
  //   if (storedTotalRs) {
  //     setTotalRs(storedTotalRs);
  //   }
  // }, []);

  // const handleNameInput = (e) => {
  //   setName(e.target.value);
  // };

  // const handleAmountInput = (e) => {
  //   setAmount(e.target.value);
  // };

  // const handleAddButton = () => {
  //   if (name.length !== 0 && amount.length !== 0) {
  //     const newExpenseItem = {
  //       name: name,
  //       amount: parseFloat(amount),
  //     };

  //     const updatedExpenseItemsArr = [...expenseItemsArr, newExpenseItem];
  //     const updatedTotalRs = totalRs + newExpenseItem.amount;

  //     setExpenseItemsArr(updatedExpenseItemsArr);
  //     setTotalRs(updatedTotalRs);

  //     window.localStorage.setItem(
  //       "expenseItemsArr",
  //       JSON.stringify(updatedExpenseItemsArr)
  //     );
  //     window.localStorage.setItem("totalRs", JSON.stringify(updatedTotalRs));
  //     setName("");
  //     setAmount("");
  //   }
  // };
  // console.log(expenseItemsArr);
  // const handleClearAllButton = () => {
  //   setExpenseItemsArr([]);
  //   setTotalRs(0);
  //   window.localStorage.removeItem("expenseItemsArr");
  //   window.localStorage.removeItem("totalRs");
  // };
  // // const handleDeleteBtn = (getId, getPrice) => {
  // //   const updatedItems = expenseItemsArr.filter((_, id) => id !== getId);
  // //   console.log("id", getId, "amount", getPrice);
  // //   const updateAmount = totalRs - getPrice;
  // //   console.log(updateAmount);
  // //   setTotalRs(updateAmount);
  // //   console.log(updatedItems);
  // //   setExpenseItemsArr(updatedItems);
  // //   window.localStorage.setItem(
  // //     "expenseItemsArr",
  // //     JSON.stringify(updatedItems)
  // //   );
  // // };

  return (
    <div className="flex flex-col items-center w-[100%] px-2 py-[60px] justify-start bg-slate-300 min-h-[100vh]">
      <div className="w-[90%] md:w-[45%] flex flex-col gap-5 items-center justify-start border-4 px-[25px] py-10 rounded-lg border-blue-900 bg-blue-300">
        <Header />
        <Name />
        <Amount />
        <div className="flex gap-2">
          <AddBtn />
          <ClearAllBtn />
        </div>
        <TotalExpense />
      </div>
      <ExpenseItems />
    </div>
  );
};

export default App;
