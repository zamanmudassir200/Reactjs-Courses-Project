import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../Firebase";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
const auth = getAuth(app);

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUpBtn = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res.user);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSignUpWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => navigate("/dashboard"))
      .catch((err) => console.log(err));
  };
  return (
    <div className="bg-purple-900 px-4 h-screen flex items-center justify-center">
      <div className="flex flex-col  border-2  p-3 sm:w-[50%] h-[60%] rounded-lg justify-center">
        <h1 className="font-bold text-3xl text-center text-white mb-5">
          Sign up
        </h1>
        <form
          action=""
          onClick={handleSignUpBtn}
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
            Sign Up
          </button>
        </form>
        <h1 className="text-center my-4 text-2xl text-white font-bold">OR</h1>
        <div className="text-center">
          <button
            onClick={handleSignUpWithGoogle}
            className="bg-purple-500 text-white rounded-md  px-2 py-1 hover:bg-purple-600 transition-all font-semibold"
          >
            Sign up with Google
          </button>
        </div>
        <p className="text-center text-white mt-5">
          Already have an account.{" "}
          <Link
            className="text-blue-800 p-1 rounded-lg font-semibold bg-white"
            to="/login"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
