import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import { AppContext } from "../../context/context";

const Cards = () => {
  const { getAllSkills, skills } = useContext(AppContext);

  useEffect(() => {
    getAllSkills();
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {skills &&
        skills.length > 0 &&
        skills.map((skill) => {
          return <Card key={skill._id} skill={skill} />;
        })}
    </div>
  );
};

export default Cards;
