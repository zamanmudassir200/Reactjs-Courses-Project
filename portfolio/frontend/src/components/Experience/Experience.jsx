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

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {experiences &&
          experiences.length > 0 &&
          experiences.map((exp) => (
            <div
              key={exp._id}
              className="bg-[#0b486e] text-white hover:scale-95 duration-200 p-6 rounded-xl shadow-md border hover:shadow-lg transition "
            >
              {exp.experienceImage && (
                <div
                  className={`w-full ${
                    exp.experienceImage ? "h-100" : "h-auto"
                  }  mb-6 overflow-hidden`}
                >
                  <img
                    src={exp.experienceImage}
                    alt={exp.experienceTitle}
                    className="w-full h-100 object-cover rounded"
                  />
                </div>
              )}

              <h2 className="text-3xl font-semibold mb-2 ">
                {exp.experienceTitle}
              </h2>
              <p className="text-2xl  mb-1">{exp.experienceCompany}</p>
              <p className="text-lg font-semibold mb-2 italic">
                {exp.experienceRole}
              </p>

              <p className="text-xl ">
                <span className="text-2xl font-semibold">Duration:</span>{" "}
                {new Date(exp.experienceStart).toDateString()} -{" "}
                {exp.isCurrentlyWorking || !exp.experienceEnd
                  ? "Present"
                  : new Date(exp.experienceEnd).toDateString()}{" "}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Experience;
