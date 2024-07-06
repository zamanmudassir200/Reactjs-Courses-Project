import "./App.css";
import Header from "./components/Header";
import Name from "./components/Name";
import Amount from "./components/Amount";
import AddBtn from "./components/AddBtn";
import ClearAllBtn from "./components/ClearAllBtn";
import TotalExpense from "./components/TotalExpense";
import ExpenseItems from "./components/ExpenseItems";

const App = () => {
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
