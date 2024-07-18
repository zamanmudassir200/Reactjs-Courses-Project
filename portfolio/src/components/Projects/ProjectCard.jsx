import React from "react";

const ProjectCard = () => {
  const react_projects = [
    {
      name: "Food Recipe",
      img: "src/components/Projects/images/food-recipe-app.png",
      gitHubLink: "https://github.com/zamanmudassir200/Food-Recipe",
      liveDemo: "https://food-recipe-react-by-mmz.netlify.app",
    },
    {
      name: "Todo List Website",
      img: "src/components/Projects/images/todo-list.png",
      gitHubLink:
        "https://github.com/zamanmudassir200/TodoList-App-react/tree/main",
      liveDemo: "https://todo-list-updated-react-by-mmz.netlify.app",
    },
    {
      name: "Expense Tracker",
      img: "src/components/Projects/images/expense-tracker.png",
      gitHubLink:
        "https://github.com/zamanmudassir200/Reactjs-Courses-Project/tree/main/ExpenseTrackerAPP",
      liveDemo: "https://expense-tracker-react-app-by-mmz.netlify.app",
    },
    {
      name: "Weather App",
      img: "src/components/Projects/images/weather-app.png",
      gitHubLink:
        "https://github.com/zamanmudassir200/React-Projects/tree/main/WeatherApp",
      liveDemo: "https://weather-app-react-by-mmz.netlify.app",
    },
    {
      name: "Word Counter",
      img: "src/components/Projects/images/word-counter.png",
      gitHubLink:
        "https://github.com/zamanmudassir200/Reactjs-Courses-Project/tree/main/WordCounterApp",
      liveDemo: "https://count-master-react-mmz.netlify.app",
    },
    {
      name: "BMI Caclulator",
      img: "src/components/Projects/images/bmi-calculator.png",
      gitHubLink:
        "https://github.com/zamanmudassir200/Reactjs-Courses-Project/tree/main/BMIcalculatorApp",
      liveDemo: "https://bmi-calculator-react-by-mmz.netlify.app",
    },
    {
      name: "Password Generator",
      img: "src/components/Projects/images/password-generator.png",
      gitHubLink:
        "https://github.com/zamanmudassir200/reactjs-random-password-generator-app/tree/main",
      liveDemo: "https://password-generator-react-by-mmz.netlify.app",
    },
    {
      name: "Calculator App",
      img: "src/components/Projects/images/calculator.png",
      gitHubLink:
        "https://github.com/zamanmudassir200/Reactjs-Courses-Project/tree/main/calculator",
      liveDemo: "https://calculator-react-by-mmz.netlify.app",
    },
  ];
  const js_projects = [
    {
      name: "Notes App",
      img: "src/components/Projects/images/js-projects/notes.png",
      gitHubLink:
        "https://github.com/zamanmudassir200/JavaScript-Projects/tree/main/Notes%20App",
      liveDemo: "https://notes-app-js-by-mmz.netlify.app",
    },
    {
      name: "Todo List",
      img: "src/components/Projects/images/js-projects/todo-list.png",
      gitHubLink:
        "https://github.com/zamanmudassir200/JavaScript-Projects/tree/main/Todo%20List",
      liveDemo: "https://todo-list-js-mmz.netlify.app",
    },
    {
      name: "Quote Generator",
      img: "src/components/Projects/images/js-projects/quote-generator.png",
      gitHubLink:
        "https://github.com/zamanmudassir200/JavaScript-Projects/tree/main/Quote%20Generator",
      liveDemo: "https://quote-generator-js-mmz.netlify.app/",
    },
    {
      name: "Quiz App",
      img: "src/components/Projects/images/js-projects/quiz.png",
      gitHubLink:
        "https://github.com/zamanmudassir200/JavaScript-Projects/tree/main/Quiz%20App",
      liveDemo: "https://quiz-app-js-mmz.netlify.app/",
    },
    {
      name: "Password Generator",
      img: "src/components/Projects/images/js-projects/password-generator.png",
      gitHubLink:
        "https://github.com/zamanmudassir200/JavaScript-Projects/tree/main/Random%20Password%20Generator",
      liveDemo: "https://random-password-generator-js-mmz.netlify.app/",
    },

    {
      name: "Color Generator",
      img: "src/components/Projects/images/js-projects/color-generator.png",
      gitHubLink:
        "https://github.com/zamanmudassir200/JavaScript-Projects/tree/main/Color%20Generator",
      liveDemo: "https://color-generator-js-mmz.netlify.app/",
    },
    {
      name: "Load More",
      img: "src/components/Projects/images/js-projects/load-more-btn.png",
      gitHubLink:
        "https://github.com/zamanmudassir200/JavaScript-Projects/tree/main/Load%20More",
      liveDemo: "https://load-more-btn-api-js-mmz.netlify.app",
    },
  ];
  return (
    <>
      <h1 className="font-bold text-5xl">React Projects</h1>

      <div className="flex items-center justify-center gap-8 my-10  flex-wrap">
        {react_projects.map((project) => {
          return (
            <div
              key={project.name}
              className="max-w-[400px] h-[300px] cursor-pointer overflow-hidden hover:scale-[1.07] transition-all flex flex-col gap-7 border-2 border-gray-500 rounded-xl "
            >
              <img
                className="w-full h-full "
                src={project.img}
                alt={project.name}
              />
              <div className={`  p-3  h-full  text-center flex flex-col gap-6`}>
                <h1 className="font-bold text-4xl">{project.name}</h1>
                <div className="flex items-center  justify-between  gap-7">
                  <a
                    className="border-2 p-2 hover:bg-white hover:text-black transition-all "
                    href={project.liveDemo}
                    target="_blank"
                  >
                    Live Demo
                  </a>
                  <a
                    className="bg-white hover:bg-gray-400 transition-all text-black font-bold p-3"
                    href={project.gitHubLink}
                    target="_blank"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h1 className="font-bold text-5xl pt-10">JavaScript Projects</h1>

      <div className="flex items-center justify-center gap-8 my-10  flex-wrap">
        {js_projects.map((js_project) => {
          return (
            <div
              key={js_project.name}
              className="max-w-[400px] h-[300px] cursor-pointer overflow-hidden hover:scale-[1.07] transition-all flex flex-col gap-7 border-2 border-gray-500 rounded-xl "
            >
              <img src={js_project.img} />
              <div className={` p-3  h-full  text-center flex-col flex gap-6`}>
                <h1 className="font-bold text-4xl ">{js_project.name}</h1>
                <div className="flex items-center  justify-between  gap-7">
                  <a
                    className="border-2 p-2 hover:bg-white hover:text-black transition-all "
                    href={js_project.liveDemo}
                    target="_blank"
                  >
                    Live Demo
                  </a>
                  <a
                    className="bg-white hover:bg-gray-400 transition-all text-black font-bold p-3"
                    href={js_project.gitHubLink}
                    target="_blank"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProjectCard;
