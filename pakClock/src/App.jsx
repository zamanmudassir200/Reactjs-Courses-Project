// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ClockDesc from "./components/ClockDesc";
import ClockName from "./components/ClockName";
import ClockTime from "./components/ClockTime";
function App() {
  return (
    <center>
      <ClockName></ClockName>
      <ClockDesc></ClockDesc>
      <ClockTime></ClockTime>
    </center>
  );
}

export default App;
