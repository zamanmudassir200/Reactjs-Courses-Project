import "./App.css";
import Navbar from "./components/Navbar";
import { filterData, jsonString } from "./components/data";
import Cards from "./components/Cards";
function App() {
  const data = JSON.parse(jsonString);
  console.log(filterData);
  console.log(data.Business[2].title);
  return (
    <>
      <Navbar />
      <input type="text" placeholder="Search here" />
      <Cards data={data} />
    </>
  );
}

export default App;
