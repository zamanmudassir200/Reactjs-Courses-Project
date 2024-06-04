import React from "react";

const TailwindTest = () => {
  return (
    <>
      <div className="border-2 rounded-lg">
        <h1 className="bg-lime-800 p-6 rounded-md ">Tailwind Test</h1>
        <div className="flex flex-col md:flex-row justify-start">
          <div className="lg:h-full lg:w-full max-w-full">
            <img
              className="h-full w-full object-cover"
              src="./tailwind.jpg"
              alt=""
            />
          </div>
          <div className="bg-slate-900 p-10 text-left">
            <p className="">
              "Tailwind CSS is the only framework that I've seen scale on large
              teams. It's easy to customize, adapts to any design, and the build
              size is tiny"
            </p>
            <p className="self-start mt-4 text-blue-600 ">M.MUDASSIR ZAMAN</p>
            <p className="self-start">Staff Engineer, Pakistan</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TailwindTest;
