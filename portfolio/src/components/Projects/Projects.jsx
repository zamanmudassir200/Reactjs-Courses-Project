import React, { useContext } from "react";
import { AppContext } from "../../context/context";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const { handleHideItems } = useContext(AppContext);

  return (
    <section
      className=" bg-[#003d62]  text-white p-10 text-3xl "
      onClick={handleHideItems}
    >
      <div className="max-w-[1250px] min-h-screen text-white mx-auto">
        <h1 className="text-6xl font-bold pt-[70px] underline mb-10 text-center text-white">
          Projects
        </h1>
        <div className="">
          <div className="">
            <ProjectCard />
          </div>
          <hr className="my-7" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
