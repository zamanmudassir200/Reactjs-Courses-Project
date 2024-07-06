import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { app } from "../Firebase";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import LogIn from "./LogIn";
const auth = getAuth(app);

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        console.log("You are logged out");
        navigate("/login");
        setUser(null);
      }
    });
  }, []);

  if (user === null) {
    return (
      <>
        <LogIn />
      </>
    );
  } else {
    return (
      <div className="bg-purple-500 px-4 h-screen flex items-center justify-center w-[100vw]">
        <div className=" flex border-2 overflow-hidden bg-red-300 h-[500px] rounded-lg w-[1000px]">
          <div className=" relative sm:w-[25%] p-2 flex flex-col text-white bg-blue-600">
            <NavLink
              className={`no-underline p-4 rounded-lg`}
              to="/dashboard/addStudent"
            >
              Add Student
            </NavLink>
            <NavLink
              className={`no-underline p-4 rounded-lg`}
              to="/dashboard/studentList"
            >
              Student List
            </NavLink>
            <NavLink
              className={`no-underline p-4 rounded-lg`}
              to="/dashboard/addFaculty"
            >
              Add Faculty
            </NavLink>{" "}
            <NavLink
              className={`no-underline p-4 rounded-lg`}
              to="/dashboard/facultyList"
            >
              Faculty List
            </NavLink>
            <div className="absolute bottom-0 py-4">
              <button
                onClick={() => signOut(auth).then((res) => navigate("/login"))}
                className="bg-white text-black font-bold px-3 py-2 rounded-lg"
              >
                LogOut
              </button>
            </div>
          </div>
          <div className="w-[80%] flex justify-center ">
            <Outlet />
          </div>
        </div>
      </div>
    );
  }
};
export default Dashboard;
