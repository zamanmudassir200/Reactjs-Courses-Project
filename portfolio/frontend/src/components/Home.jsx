import React, { useContext, useEffect, useState } from "react";
import Education from "./Education/Education.jsx";
import { AppContext } from "../context/context.jsx";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { handleHideItems, getAllProfiles, profiles, setProfiles } =
    useContext(AppContext);
  const [displayText, setDisplayText] = useState("");
  // const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const textList = [
    "M.Mudassir Zaman",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
  ];

  const typingSpeed = 150;
  const deletingSpeed = 50;
  const pauseBetween = 2000;

  useEffect(() => {
    const handleTyping = () => {
      const currentText = textList[loopNum % textList.length];

      if (isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length - 1));
      } else {
        setDisplayText(currentText.substring(0, displayText.length + 1));
      }

      if (!isDeleting && displayText === currentText) {
        setTimeout(() => setIsDeleting(true), pauseBetween);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum]);
  useEffect(() => {
    getAllProfiles();
  }, []);
  useEffect(() => {}, [profiles]);

  return (
    <>
      <section
        onClick={handleHideItems}
        className="bg-[#003d62] min-h-screen py-10 items-center justify-center flex px-[20px] border-white border-b-4"
      >
        <div className="flex lg:flex-row flex-col  items-center justify-center  gap-[1rem]  lg:gap-[4rem]  lg:p-10 max-w-[120rem] mx-auto">
          <div className="">
            <div className="animate__animated animate__bounceInLeft border-4 border-orange-400 rounded-[100px] shadow-2xl shadow-orange-500  overflow-hidden ">
              <img
                src={profiles[0]?.profileImage || "./profile.jpg"}
                alt="Profile"
                className=" w-[14rem] sm:w-[20rem] lg:w-[28rem]  inline-block transition-transform duration-100 will-change-transform"
              />
            </div>
          </div>

          <div className="flex lg:flex-col flex-wrap gap-0 lg:gap-5 mx-5 max-w-[600px] text-center">
            <div className="">
              <span className="text-[3rem] md:text-[5rem] lg:text-[6rem] font-bold text-orange-500">
                Hi👋
              </span>
              <span className="text-[2.9rem] text-white">, I'm </span>
              <span className="text-[34px] sm:text-[5rem] text-white">
                {loopNum === 0 && displayText}
              </span>
              <span
                className={`text-[30px] sm:text-[4.6rem] font-bold text-white border-r-[0.15em] border-orange-500 overflow-hidden whitespace-nowrap mx-auto typing-animation`}
              >
                {loopNum > 0 && ` ${displayText}`}
              </span>
            </div>
            <div className="mt-5 text-[23px] text-white text-justify max-w-[700px] leading-[35px]">
              <p>
                Crafting dynamic and responsive web experiences with React.
                Specializing in modern front-end development. Transforming ideas
                into seamless user interfaces
              </p>
            </div>
            <div className="mt-10 text-center flex items-center justify-center gap-6 self-center relative ">
              <a
                href="/mmudassirzamanresume.pdf"
                target="_blank"
                className="relative  inline-block text-white overflow-hidden font-extrabold text-[1.5rem] px-8 py-4 border-2 border-orange-500 rounded-lg transition-all duration-300 transform hover:scale-[1.02] letter-spacing-[0.4rem] before:absolute self-center before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-orange-500 before:z-[-1] before:transition-left before:duration-700 before:ease-in-out hover:before:left-0  "
              >
                Download CV
              </a>
              <a
                onClick={() => navigate("/contact")}
                className="relative inline-block overflow-hidden font-extrabold text-[1.5rem] px-8 py-4 border-2 border-orange-500 bg-orange-500 hover:text-orange-500  text-white cursor-pointer rounded-lg transition-all duration-100 transform hover:scale-[1.02] letter-spacing-[0.4rem] before:absolute self-center before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-white before:z-[-1] before:transition-all before:duration-700 before:ease-in-out hover:before:left-0 "
              >
                Hire me
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#46aacc] py-10  ">
        <div className=" max-w-[1100px] mx-auto px-10 ">
          <h1 className="text-center py-10 font-bold text-white underline text-6xl">
            Education
          </h1>
          <Education />
        </div>
      </section>
    </>
  );
};

export default Home;
