import React, { useState } from "react";

const Thirteen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegisted, setIsRegistered] = useState(false);
  return (
    <div>
      <form action="">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          className="border-2 mx-2 my-3"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          className="border-2 mx-2 my-3"
        />
        <button className="border-2 bg-blue-500 p-3 rounded-lg text-white ">
          {" "}
          {isRegisted ? "Login" : "Register"}
        </button>

        <p>
          {isRegisted
            ? "Don't have an account? Register now"
            : "Already have an account? Log In"}
        </p>
      </form>
      <button
        onClick={() => setIsRegistered(!isRegisted)}
        className="border-2 bg-blue-500 p-3 rounded-lg text-white "
      >
        {isRegisted ? "Register" : "Log In"}
      </button>
    </div>
  );
};

export default Thirteen;
