import React from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";

const ExperienceList = ({
  experience,
  setSelectedItem,
  setSelectedType,
  setDeleteModalOpen,
}) => {
  return (
    <div
      key={experience._id}
      className="p-4 relative mb-4 rounded-lg shadow-md border border-gray-200 bg-white"
    >
      {experience.experienceImage && (
        <div className="w-50 h-50 rounded-lg overflow-hidden mx-auto mb-2">
          <img
            className="w-full h-full object-cover"
            src={experience.experienceImage}
            alt="Experience"
          />
        </div>
      )}

      <div className="text-4xl font-semibold text-center mb-2">
        {experience.experienceTitle} at {experience.experienceCompany}
      </div>

      <div className="text-2xl text-gray-700 text-center mb-2">
        Role: {experience.experienceRole}
      </div>

      <div className="text-2xl text-gray-600 text-center mb-2">
        {new Date(experience.experienceStart).toDateString()} -{" "}
        {experience.isCurrentlyWorking
          ? "Present"
          : experience.experienceEnd
          ? new Date(experience.experienceEnd).toDateString()
          : "undefined"}
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-gray-600">
        <p className="text-xl">
          <span className="font-semibold">Created:</span>{" "}
          {new Date(experience.createdAt).toLocaleString()}
        </p>
        <p className="text-xl">
          <span className="font-semibold">Updated:</span>{" "}
          {new Date(experience.updatedAt).toLocaleString()}
        </p>
      </div>

      <div
        onClick={() => {
          setSelectedItem(experience);
          setSelectedType("experiences");
          setDeleteModalOpen(true);
        }}
        className="absolute -top-5 -right-5 cursor-pointer"
      >
        <RiDeleteBin5Fill className="text-red-500" size={29} />
      </div>
    </div>
  );
};

export default ExperienceList;
