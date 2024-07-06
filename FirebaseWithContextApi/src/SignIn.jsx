import React from "react";
import { useState } from "react";
import { useFirebase } from "./context/Firebase";

const Signup = () => {
  const firebase = useFirebase();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <h1 className="font-extrabold text-3xl">Sign in</h1>
      <input
        className="border-2"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder="Enter email here..."
      />
      <input
        className="border-2 mx-2 "
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password here..."
      />
      <div className="flex gap-2 items-center justify-center">
        <button
          className="bg-purple-500 text-white p-3 my-3 rounded-lg"
          onClick={() =>
            firebase.signInUserWithEmailAndPassword(email, password)
          }
        >
          Sign In
        </button>

        {/* <SignUpWithGoogle /> */}
      </div>
    </div>
  );
};

export default Signup;
