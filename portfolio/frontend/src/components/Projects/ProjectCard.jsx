import React, { useContext } from "react";
import { AppContext } from "../../context/context";

const ProjectCard = () => {
  const mern_stack_projects = [
    {
      name: "E-commerce Website",
      img: "./ecommerce.png",
      gitHubLink:
        "https://github.com/zamanmudassir200/ecommerce-fullstack-design",
      liveDemo: "https://ecommerce-fullstack-design-navy.vercel.app/",
    },
  ];
  const react_projects = [
    {
      name: "Food Recipe",
      img: "./food-recipe-app.png",
      gitHubLink: "https://github.com/zamanmudassir200/Food-Recipe",
      liveDemo: "https://food-recipe-react-by-mmz.netlify.app",
    },
    {
      name: "Todo List Website",
      img: "./todo-list.png",
      gitHubLink:
        "https://github.com/zamanmudassir200/TodoList-App-react/tree/main",
      liveDemo: "https://todo-list-updated-react-by-mmz.netlify.app",
    },
    {
      name: "Expense Tracker",
      img: "./expense-tracker.png",
      gitHubLink:
        "https://github.com/zamanmudassir200/Reactjs-Courses-Project/tree/main/ExpenseTrackerAPP",
      liveDemo: "https://expense-tracker-react-app-by-mmz.netlify.app",
    },
    {
      name: "Weather App",
      img: "./weather-app.png",
      gitHubLink:
        "https://github.com/zamanmudassir200/React-Projects/tree/main/WeatherApp",
      liveDemo: "https://weather-app-react-by-mmz.netlify.app",
    },
    {
      name: "Word Counter",
      img: "./word-counter.png",
      gitHubLink:
        "https://github.com/zamanmudassir200/Reactjs-Courses-Project/tree/main/WordCounterApp",
      liveDemo: "https://count-master-react-mmz.netlify.app",
    },
    {
      name: "BMI Caclulator",
      img: "./bmi-calculator.png",
      gitHubLink:
        "https://github.com/zamanmudassir200/Reactjs-Courses-Project/tree/main/BMIcalculatorApp",
      liveDemo: "https://bmi-calculator-react-by-mmz.netlify.app",
    },
    {
      name: "Password Generator",
      img: "./password-generator.png",
      gitHubLink:
        "https://github.com/zamanmudassir200/reactjs-random-password-generator-app/tree/main",
      liveDemo: "https://password-generator-react-by-mmz.netlify.app",
    },
    {
      name: "Calculator App",
      img: "./calculator.png",
      gitHubLink:
        "https://github.com/zamanmudassir200/Reactjs-Courses-Project/tree/main/calculator",
      liveDemo: "https://calculator-react-by-mmz.netlify.app",
    },
  ];
  const js_projects = [
    {
      name: "Notes App",
      img: "./notes.png",
      gitHubLink:
        "https://github.com/zamanmudassir200/JavaScript-Projects/tree/main/Notes%20App",
      liveDemo: "https://notes-app-js-by-mmz.netlify.app",
    },
    {
      name: "Todo List",
      img: "./todo-list-js.png",
      gitHubLink:
        "https://github.com/zamanmudassir200/JavaScript-Projects/tree/main/Todo%20List",
      liveDemo: "https://todo-list-js-mmz.netlify.app",
    },
    {
      name: "Quote Generator",
      img: "./quote-generator.png",
      gitHubLink:
        "https://github.com/zamanmudassir200/JavaScript-Projects/tree/main/Quote%20Generator",
      liveDemo: "https://quote-generator-js-mmz.netlify.app/",
    },
    {
      name: "Quiz App",
      img: "./quiz.png",
      gitHubLink:
        "https://github.com/zamanmudassir200/JavaScript-Projects/tree/main/Quiz%20App",
      liveDemo: "https://quiz-app-js-mmz.netlify.app/",
    },
    {
      name: "Password Generator",
      img: "./password-generator.png",
      gitHubLink:
        "https://github.com/zamanmudassir200/JavaScript-Projects/tree/main/Random%20Password%20Generator",
      liveDemo: "https://random-password-generator-js-mmz.netlify.app/",
    },

    {
      name: "Color Generator",
      img: "./color-generator.png",
      gitHubLink:
        "https://github.com/zamanmudassir200/JavaScript-Projects/tree/main/Color%20Generator",
      liveDemo: "https://color-generator-js-mmz.netlify.app/",
    },
    {
      name: "Load More",
      img: "./load-more-btn.png",
      gitHubLink:
        "https://github.com/zamanmudassir200/JavaScript-Projects/tree/main/Load%20More",
      liveDemo: "https://load-more-btn-api-js-mmz.netlify.app",
    },
  ];
  const { projects } = useContext(AppContext);

  return (
    <>
      <h1 className="font-bold text-5xl underline ">Mern stack Projects</h1>
      <div className="flex items-center justify-start gap-8 my-10 flex-wrap">
        {projects.filter(
          (project) => project.projectType.toLowerCase() === "mern stack"
        ).length > 0 ? (
          projects
            .filter(
              (project) => project.projectType.toLowerCase() === "mern stack"
            )
            .map((project) => (
              <div
                key={project._id}
                className="max-w-[400px] bg-white rounded-xl border-2 border-gray-500 overflow-hidden shadow-lg"
              >
                {/* Image with Hover Buttons */}
                <div className="relative h-[220px] overflow-hidden group">
                  <img
                    className="w-full h-full object-cover"
                    src={project.projectImage}
                    alt={project.projectName}
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 transition-all flex cursor-pointer items-center justify-center duration-300 gap-4">
                    <a
                      className="border-2 font-bold border-yellow-400 px-3 py-1 hover:bg-white hover:text-black transition-all rounded"
                      href={project.liveDemoLink}
                      target="_blank"
                    >
                      Live Demo
                    </a>
                    <a
                      className="bg-white border-2 hover:bg-yellow-400 transition-all text-black font-bold px-3 py-1 rounded"
                      href={project.githubLink}
                      target="_blank"
                    >
                      Github
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-4 text-black">
                  <h1 className="font-bold text-4xl capitalize italic  text-center underline text-yellow-600 my-2">
                    {project.projectName}
                  </h1>
                  <p className="text-3xl text-justify tracking-widest leading-10 my-6 text-gray-700">
                    {project.description}
                  </p>
                </div>
              </div>
            ))
        ) : (
          <h1 className="text-3xl text-red-500">
            No projects of MERN stack found
          </h1>
        )}
      </div>

      <h1 className="font-bold text-5xl underline ">React Projects</h1>

      <div className="flex items-center justify-start gap-8 my-10 flex-wrap">
        {projects.filter(
          (project) => project.projectType.toLowerCase() === "react"
        ).length > 0 ? (
          projects
            .filter((project) => project.projectType.toLowerCase() === "react")
            .map((project) => (
              <div
                key={project._id}
                className="max-w-[400px] bg-white rounded-xl border-2 border-gray-500 overflow-hidden shadow-lg"
              >
                {/* Image with Hover Buttons */}
                <div className="relative h-[220px] overflow-hidden group">
                  <img
                    className="w-full h-full object-cover"
                    src={project.projectImage}
                    alt={project.projectName}
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center gap-4">
                    <a
                      className="border-2 font-bold border-yellow-400 px-3 py-1 hover:bg-white hover:text-black transition-all rounded"
                      href={project.liveDemoLink}
                      target="_blank"
                    >
                      Live Demo
                    </a>
                    <a
                      className="bg-white border-2 hover:bg-yellow-400 transition-all text-black font-bold px-3 py-1 rounded"
                      href={project.githubLink}
                      target="_blank"
                    >
                      Github
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-4 text-black">
                  <h1 className="font-bold text-4xl capitalize italic underline text-yellow-600 mb-2">
                    {project.projectName}
                  </h1>
                  <p className="text-3xl text-justify tracking-widest leading-10 my-6 text-gray-700">
                    {" "}
                    {project.description}
                  </p>
                </div>
              </div>
            ))
        ) : (
          <h1 className="text-3xl text-red-500">No projects of React found</h1>
        )}
      </div>

      <h1 className="font-bold text-5xl pt-10 underline">
        JavaScript Projects
      </h1>

      <div className="flex items-center justify-start gap-8 my-10 flex-wrap">
        {projects.filter(
          (project) => project.projectType.toLowerCase() === "javascript"
        ).length > 0 ? (
          projects
            .filter(
              (project) => project.projectType.toLowerCase() === "javascript"
            )
            .map((project) => (
              <div
                key={project._id}
                className="max-w-[400px] bg-white rounded-xl border-2 border-gray-500 overflow-hidden shadow-lg"
              >
                {/* Image with Hover Buttons */}
                <div className="relative h-[220px] overflow-hidden group">
                  <img
                    className="w-full h-full object-cover"
                    src={project.projectImage}
                    alt={project.projectName}
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center gap-4">
                    <a
                      className="border-2 font-bold border-yellow-400 px-3 py-1 hover:bg-white hover:text-black transition-all rounded"
                      href={project.liveDemoLink}
                      target="_blank"
                    >
                      Live Demo
                    </a>
                    <a
                      className="bg-white border-2 hover:bg-yellow-400 transition-all text-black font-bold px-3 py-1 rounded"
                      href={project.githubLink}
                      target="_blank"
                    >
                      Github
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-4 text-black">
                  <h1 className="font-bold text-4xl capitalize italic underline text-yellow-600 mb-2">
                    {project.projectName}
                  </h1>
                  <p className="text-3xl text-justify tracking-widest leading-10 my-6 text-gray-700">
                    {" "}
                    {project.description}
                  </p>
                </div>
              </div>
            ))
        ) : (
          <h1 className="text-3xl text-red-500">
            No projects of Javascript found
          </h1>
        )}
      </div>
    </>
  );
};

export default ProjectCard;
