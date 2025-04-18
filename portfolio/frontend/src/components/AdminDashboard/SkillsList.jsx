import React from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";

const SkillsList = ({
  skill,
  setSelectedItem,
  setSelectedType,
  setDeleteModalOpen,
}) => {
  return (
    <div
      key={skill._id}
      className="relative border-2 border-gray-300 bg-white shadow-lg rounded p-4 mb-4 flex flex-col gap-2 items-center justify-between space-x-4"
    >
      <div className="w-full h-full overflow-hidden ">
        <img
          src={skill.skillImage}
          alt={skill.skillName}
          className="w-full h-full object-contain"
        />
      </div>
      <h3 className="text-3xl font-semibold">{skill.skillName}</h3>
      <div
        onClick={() => {
          setSelectedItem(skill);
          setSelectedType("skills");
          setDeleteModalOpen(true);
        }}
        className="absolute -top-5 -right-5 cursor-pointer"
      >
        <RiDeleteBin5Fill className="text-red-500" size={29} />
      </div>
    </div>
  );
};

export default SkillsList;
