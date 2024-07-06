import "./App.css";
import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useFirebase } from "./context/Firebase";
import Signup from "./Signup.jsx";
import SignIn from "./SignIn.jsx";
import { firebaseAuth } from "./context/Firebase.jsx";
// import SignUpWithGoogle from "./SignUpWithGoogle";

function App() {
  const [user, setUser] = useState(null);
  // const firebase = useFirebase();
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        console.log("Hello", user);
        setUser(user);
      } else {
        console.log("You are logged out");
        setUser(null);
      }
    });
  }, []);
  // console.log("Firebase", firebase);
  if (user === null) {
    return (
      <>
        <Signup />
        <SignIn />
      </>
    );
  } else {
    return (
      <div className="">
        <h1>Hello world {user.email}</h1>
        <button
          className="bg-purple-500 text-white p-3 my-3 rounded-lg"
          onClick={() => signOut(firebaseAuth)}
        >
          LogOut
        </button>
      </div>
    );
  }
}

export default App;
