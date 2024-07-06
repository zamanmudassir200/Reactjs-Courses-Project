import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Home from "./components/Navbar/Home/Home.jsx";
import Video from "./components/Navbar/Video/Video.jsx";
import Groups from "./components/Navbar/Groups/Groups.jsx";
import Gaming from "./components/Navbar/Gaming/Gaming.jsx";
import LeftSideBar from "./components/LeftSideBar/LeftSideBar.jsx";
import RightSideBar from "./components/RighSideBar/RightSideBar.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="flex items-center justify-center bg-[#e4e6eb]-100">
          <div className="w-[25%] fixed overflow-y-scroll top-[70px] left-0 h-screen border-2">
            <LeftSideBar />
          </div>
          <div className="w-[40%]  top-[70px] left-[25%] h-screen border-2">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/video" element={<Video />}></Route>
              <Route path="/groups" element={<Groups />}></Route>
              <Route path="/gaming" element={<Gaming />}></Route>
            </Routes>
          </div>
          <div className="w-[25%] fixed overflow-y-scroll top-[70px] right-0 h-screen border-2">
            <RightSideBar />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
