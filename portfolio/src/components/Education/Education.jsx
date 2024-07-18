import React, { useState } from "react";
import { education } from "./Education";
import { FaStar } from "react-icons/fa";

const Education = () => {
  const [enableMultiSelection, setEnableMultiSelection] = useState(true);
  const [multipleIds, setMultipleIds] = useState([]);

  const handleMultiSelection = (id) => {
    const copyMultipleIds = [...multipleIds];
    const findids = copyMultipleIds.indexOf(id);
    if (findids === -1) {
      copyMultipleIds.push(id);
    } else {
      copyMultipleIds.splice(findids, 1);
    }
    setMultipleIds(copyMultipleIds);
  };
  return (
    <>
      <div className="max-w-[1000px] mx-auto">
        {education.map((edu) => {
          return (
            <div
              key={edu.id}
              className="mb-4 p-4 flex shadow-xl bg-[#003d62] text-white flex-col mx-auto items-start justify-around"
            >
              <div className="border-b-2 border-white w-full px-3 py-5 flex items-center justify-between">
                <span className="font-bold flex items-center justfiy-center gap-3 text-3xl">
                  <FaStar />
                  {edu.level}
                </span>
                <span
                  className="text-4xl font-bold cursor-pointer"
                  onClick={
                    enableMultiSelection
                      ? () => handleMultiSelection(edu.id)
                      : "null"
                  }
                >
                  +
                </span>
              </div>
              <div className="">
                {enableMultiSelection
                  ? multipleIds.indexOf(edu.id) !== -1 && (
                      <div
                        className={`py-4 pl-4  font-semibold text-2xl sm:text-3xl `}
                      >
                        <ul className="flex flex-col gap-6">
                          <li>- {edu.institution}</li>
                          <li>- {edu.degree}</li>
                          <li>- {edu.percentage}</li>
                          <li>- {edu.year}</li>
                          <li>- {edu.subjects}</li>
                        </ul>
                      </div>
                    )
                  : null}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Education;
