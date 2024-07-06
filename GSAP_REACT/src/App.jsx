import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./App.css";
import { useRef } from "react";

function App() {
  const gsapRef = useRef();

  useGSAP(() => {
    gsap.to(gsapRef.current, {
      x: 1400,
      duration: 2,
      delay: 2,
      rotate: 720,
    });
  });
  return (
    <>
      <main className="flex items-center h-[100vh] w-[100%] justify-evenly bg-black">
        <div className="rounded-xl p-4 border-2 border-white">
          <div className="circle h-[300px] bg-red-600 w-[300px] rounded-full"></div>
          <div className="box w-[300px] h-[300px] bg-[blue] rounded-lg"></div>
        </div>
        <div className="kuch">
          <div className="circle h-[300px] bg-red-600 w-[300px] rounded-full"></div>
          <div className="box w-[300px] h-[300px] bg-[blue] rounded-lg"></div>
        </div>
      </main>
    </>
  );
}

export default App;
