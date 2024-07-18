import React, { useContext } from "react";
import Cards from "./Cards";
import { AppContext } from "../../context/context";

const Skills = () => {
  const { handleHideItems } = useContext(AppContext);

  return (
    <>
      <section onClick={handleHideItems} className="bg-[#003d62] py-10 px-10">
        <div className="max-w-[1250px] min-h-screen text-white mx-auto">
          <h1 className="text-6xl underline font-bold pt-[70px] mb-10 text-center">
            My Skills
          </h1>
          <p className="text-3xl leading-[37px] text-justify">
            I have a strong passion for creating great user experiences, so I
            dedicated myself to learning frontend technologies. I took online
            courses, worked on projects, and collaborated with skilled
            developers to master React, JavaScript, HTML5, CSS3, and Tailwind
            CSS. By continuously studying and practicing, I stay current with
            the latest advancements and have become proficient in modern
            frontend development.
          </p>
          <div className="my-9">
            <Cards />
          </div>
          <div className="border-2 ">
            <h1 className=" text-6xl underline font-bold pt-[40px] mb-10 text-center">
              Certificates
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
