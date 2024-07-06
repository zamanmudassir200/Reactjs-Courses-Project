import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../Firebase";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogInBtn = (e) => {
    e.preventDefault();
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res.user);
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-purple-900 px-4 h-screen flex items-center justify-center">
      <div className="flex flex-col  border-2  p-3 sm:w-[50%] h-[50%] rounded-lg justify-center">
        <h1 className="font-bold text-3xl text-center text-white mb-5">
          Login
        </h1>
        <form
          action=""
          onClick={handleLogInBtn}
          className="flex flex-col gap-5"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
            className="rounded-md px-2 py-1"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter password"
            className="rounded-md px-2 py-1"
          />
          <button className="bg-purple-500 text-white rounded-md px-2 py-1 hover:bg-purple-600 transition-all font-semibold">
            Login
          </button>
        </form>
        <p className="text-center text-white mt-5">
          Don't have an account.{" "}
          <Link
            className="text-blue-800 p-1 mt-7 rounded-lg font-semibold bg-white"
            to="/signup"
          >
            SignUp
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
