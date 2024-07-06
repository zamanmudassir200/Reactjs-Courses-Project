// import { getDatabase, ref, set } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase";
import "./App.css";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

// const db = getDatabase(app);
const auth = getAuth(app);

function App() {
  // const signUpUser = () => {
  //   createUserWithEmailAndPassword(
  //     auth,
  //     "zamanmudassir@gmail.com",
  //     "mudassir@123"
  //   ).then((value) => console.log(value));
  // };
  // const putData = () => {
  //   set(ref(db, "users/MuhammadMudassirZaman"), {
  //     id: 1,
  //     name: " Muhammad Mudassir Zaman",
  //     age: 23,
  //   });
  // };
  return (
    <>
      {/* <h1>Firebase React App</h1> */}
      <SignUp />
      <SignIn />
      {/* <button onClick={signUpUser}>Create User</button> */}
    </>
  );
}

export default App;
