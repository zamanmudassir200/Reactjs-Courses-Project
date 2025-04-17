import React from "react";

const Card = ({ skill }) => {
  return (
    <div className="text-center bg-[#0a6ba86b] p-4 rounded-md shadow-lg border-8 border-transparent transition-all hover:scale-[1.06] hover:border-l-white hover:border-b-white cursor-pointer">
      <h2 className="text-4xl font-bold mb-7">{skill?.skillName}</h2>
      <div className="w-full h-36 overflow-hidden">
        <img
          src={skill.skillImage}
          alt={skill.name}
          className="w-full h-full object-contain "
        />
      </div>
    </div>
  );
};

export default Card;
