import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="bg-blue-700 h-screen items-center flex py-3 ">
      <div className=" border-2 flex flex-col py-4 min-h-[60%] bg-white items-center gap-2 rounded-lg justify-center ] min-w-[80%] md:min-w-[40%] mx-auto">
        <h1 className="text-3xl py-7 font-bold ">Chat App</h1>
        <p className="font-semibold text-2xl ">Sign Up</p>
        <form
          action=""
          className="flex flex-col gap-10  rounded-lg mx-auto py-7 px-10 items-center justify-center w-[80%] border-2"
        >
          <input
            className=" w-full text-black  focus:border-black hover:border-black outline-none border-b-2"
            type="text"
            placeholder="Display Name"
          />
          <input
            className=" w-full text-black  focus:border-black hover:border-black outline-none border-b-2"
            type="email"
            placeholder="Email"
          />

          <input
            className=" w-full text-black  focus:border-black hover:border-black outline-none border-b-2"
            type="password"
            placeholder="Password"
          />
          <input
            className=" w-full hidden text-black outline-none border-b-2"
            type="file"
            id="file"
            placeholder="Password"
          />
          <label
            htmlFor="file"
            className="flex items-center cursor-pointer justify-start w-full"
          >
            <img
              className="w-10 self-start "
              src="public\addfile.jpeg"
              alt=""
            />
            <p className="px-2 text-gray-600">add an image/avatar</p>
          </label>
          <button className="bg-blue-700 py-2 w-full hover:bg-blue-900 transition-all text-white">
            Sign up
          </button>
        </form>
        <p>
          Already have an account? <>Login</>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
