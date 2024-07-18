import React from "react";
import Card from "./Card";

const skills = {
  HTML5: [{ name: "HTML5", img: "./html.png" }],
  CSS3: [{ name: "CSS3", img: "./css.png" }],
  JavaScript: [{ name: "JavaScript", img: "./js.png" }],
  React: [{ name: "React", img: "./react.png" }],
  Tailwind: [{ name: "Tailwind", img: "./tailwind.png" }],
  Bootstrap5: [{ name: "Bootstrap5", img: "./bootstrap.png" }],
  Git: [{ name: "Git", img: "./git.png" }],
  Github: [{ name: "Github", img: "./github.png" }],
  Firebase: [{ name: "Firebase", img: "./firebase.png" }],
};

const Cards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {Object.keys(skills).map((category, index) => (
        <Card key={index} category={category} skills={skills[category]} />
      ))}
    </div>
  );
};

export default Cards;
