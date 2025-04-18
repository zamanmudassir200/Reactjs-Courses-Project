import React from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";

const ProjectList = ({
  project,
  setDeleteModalOpen,
  setSelectedItem,
  setSelectedType,
  isExpanded,
  isLong,
  toggleExpand,
}) => {
  return (
    <div
      key={project._id}
      className="relative bg-white rounded-2xl shadow-md border-2 border-gray-400 transition-transform transform hover:scale-105 flex flex-col h-[500px]"
    >
      <div className="h-[50%] w-full border-b-2 overflow-hidden">
        <img
          src={project.projectImage}
          alt={project.projectName}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">
            {project.projectName}
          </h2>

          <p className="text-[15px] font-light text-gray-600 text-justify tracking-wide leading-relaxed mt-2 mb-2">
            {isExpanded || !isLong
              ? project.description
              : project.description.slice(0, 200) + "..."}{" "}
            {isLong && (
              <button
                onClick={() => toggleExpand(project._id)}
                className="text-[14px] text-blue-600 hover:underline mb-2"
              >
                {isExpanded ? "See less" : "See more"}
              </button>
            )}
          </p>
        </div>

        <div className="mt-auto">
          <div className="flex items-center justify-between text-sm text-blue-600 font-medium">
            <a
              href={project.githubLink}
              target="_blank"
              className="text-3xl hover:underline"
            >
              Github
            </a>
            <a
              href={project.liveDemoLink}
              target="_blank"
              className="text-3xl hover:underline"
            >
              Live Demo
            </a>
          </div>
          <p className="mt-3 text-3xl text-gray-500 italic capitalize">
            <strong>Project Type:</strong> {project.projectType}
          </p>
        </div>
        <div
          onClick={() => {
            setSelectedItem(project);
            setSelectedType("projects");
            setDeleteModalOpen(true);
          }}
          className="absolute z-30 -top-5 -right-5 cursor-pointer"
        >
          <RiDeleteBin5Fill className="text-red-500" size={29} />
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
