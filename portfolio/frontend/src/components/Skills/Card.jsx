import React from "react";

const Card = ({ category, skills }) => {
  return (
    <div className="text-center bg-[#0a6ba86b] p-4 rounded-md shadow-lg border-8 border-transparent transition-all hover:scale-[1.06] hover:border-l-white hover:border-b-white cursor-pointer">
      <h2 className="text-4xl font-bold mb-4">{category}</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index} className="mb-2 flex items-center justify-center">
            <img
              src={skill.img}
              alt={skill.name}
              className="w-[100px] h-[100px] mr-2"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
