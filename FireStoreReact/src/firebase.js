import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBDXbytmLtAu0exZPk1GJ5g5G4ecqMLjQ8",
  authDomain: "my-app-e9213.firebaseapp.com",
  databaseURL: "https://my-app-e9213-default-rtdb.firebaseio.com",
  projectId: "my-app-e9213",
  storageBucket: "my-app-e9213.appspot.com",
  messagingSenderId: "519997753978",
  appId: "1:519997753978:web:e0d1c1ac0c3d6b60ea09c3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
