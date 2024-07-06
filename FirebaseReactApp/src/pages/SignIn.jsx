import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const createUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => alert("Login"))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Sign In Authentication</h1>

      <div className="">
        <label htmlFor="">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enter email here"
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Enter password here"
        />
        <button onClick={createUser}>Sign up</button>
      </div>
    </div>
  );
};

export default SignIn;
