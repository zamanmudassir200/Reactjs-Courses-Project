import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import { AppContext } from "../../context/context";
import axios from "axios";
import url from "../../url/url.js";

// const skills = {
//   HTML5: [{ name: "HTML5", img: "./html.png" }],
//   CSS3: [{ name: "CSS3", img: "./css.png" }],
//   JavaScript: [{ name: "JavaScript", img: "./js.png" }],
//   React: [{ name: "React", img: "./react.png" }],
//   Tailwind: [{ name: "Tailwind", img: "./tailwind.png" }],
//   Bootstrap5: [{ name: "Bootstrap5", img: "./bootstrap.png" }],
//   Git: [{ name: "Git", img: "./git.png" }],
//   Github: [{ name: "Github", img: "./github.png" }],
//   Firebase: [{ name: "Firebase", img: "./firebase.png" }],
// };
// const { setSkills, skills } = useContext(AppContext);

const Cards = () => {
  const { getAllSkills, skills } = useContext(AppContext);

  // const [skills, setSkills] = useState([]);
  // const getAllSkills = async () => {
  //   try {
  //     const response = await axios.get(`${url}/skills`, {
  //       withCredentials: true,
  //     });

  //     setSkills(response.data.skills);
  //   } catch (error) {
  //     toast.error("Error occured during fetching projects");
  //   }
  // };
  useEffect(() => {
    getAllSkills();
  }, []);
  console.log("skills from cards ", skills);
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
