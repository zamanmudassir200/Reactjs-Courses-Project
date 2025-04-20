import React, { useContext, useEffect } from "react";
import { AppContext } from "../../context/context";

const Experience = () => {
  const { getAllExperiences, experiences } = useContext(AppContext);

  useEffect(() => {
    getAllExperiences();
  }, []);

  return (
    <div className="bg-[#0b486e] p-20">
      <h1 className="text-6xl underline font-bold text-white text-center mb-8">
        Experiences
      </h1>

      <div className="flex flex-col gap-7">
        {experiences &&
          experiences.length > 0 &&
          experiences.map((exp) => (
            <div
              key={exp._id}
              className="bg-[#0b486e] flex flex-wrap flex-grow sm:justify-between gap-5 sm:items-start justify-center text-white hover:scale-[0.98] duration-200 p-6 rounded-xl shadow-md border hover:shadow-lg transition "
            >
              <div className="">
                <h2 className="text-[26px] font-semibold mb-5 ">
                  {exp.experienceTitle}
                </h2>
                <p className="text-4xl  mb-2">{exp.experienceCompany}</p>
                <p className="text-xl font-semibold mb-3 italic">
                  {exp.experienceRole}
                </p>

                <p className="text-2xl ">
                  <span className="text-3xl font-semibold">Duration:</span>{" "}
                  <span className="">
                    {new Date(exp.experienceStart).toDateString()} -{" "}
                    {exp.isCurrentlyWorking || !exp.experienceEnd ? (
                      <span className="text-orange-500 font-bold">Present</span>
                    ) : (
                      new Date(exp.experienceEnd).toDateString()
                    )}{" "}
                  </span>
                </p>
              </div>
              {exp.experienceImage && (
                <div
                  className={` ${
                    exp.experienceImage ? "h-80" : "h-auto"
                  } hover:scale-150 duration-200  mb-6 overflow-hidden`}
                >
                  <img
                    src={exp.experienceImage}
                    alt={exp.experienceTitle}
                    className="w-full  h-full object-contain rounded"
                  />
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Experience;
