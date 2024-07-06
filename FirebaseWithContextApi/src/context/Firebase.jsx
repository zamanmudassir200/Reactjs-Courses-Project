import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBDXbytmLtAu0exZPk1GJ5g5G4ecqMLjQ8",
  authDomain: "my-app-e9213.firebaseapp.com",
  projectId: "my-app-e9213",
  storageBucket: "my-app-e9213.appspot.com",
  messagingSenderId: "519997753978",
  appId: "1:519997753978:web:e0d1c1ac0c3d6b60ea09c3",
  databaseURL: "https://my-app-e9213-default-rtdb.firebaseio.com/",
};

const googleProvider = new GoogleAuthProvider();
const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
const firebaseDb = getDatabase(firebaseApp);
const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  const signUpUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password).then(
      (value) => alert("Sign Up Successfully")
    );
  };
  const putData = (key, data) => {
    set(ref(firebaseDb, key), data);
  };
  const signUpUserWithGoogle = () => {
    signInWithPopup(firebaseAuth, googleProvider);
  };
  const signInUserWithEmailAndPassword = (email, password) => {
    signInWithEmailAndPassword(firebaseAuth, email, password).then((value) =>
      alert("Sign in SUCCESSFULLY")
    );
  };
  return (
    <FirebaseContext.Provider
      value={{
        signUpUserWithEmailAndPassword,
        putData,
        signUpUserWithGoogle,
        signInUserWithEmailAndPassword,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
