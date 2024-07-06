import Dashboard from "./components/Dashboard.jsx";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AddStudent from "./components/AddStudent.jsx";
import StudentList from "./components/StudentList.jsx";
import UpdateStudent from "./components/UpdateStudent.jsx";
import AddFaculty from "./components/AddFaculty.jsx";
import FacultyList from "./components/FacultyList.jsx";
import UpdateFaculty from "./components/UpdateFaculty.jsx";
import SignUp from "./components/SignUp.jsx";
import LogIn from "./components/LogIn.jsx";

const myRouter = createBrowserRouter([
  { path: "", Component: SignUp },

  { path: "signup", Component: SignUp },
  { path: "login", Component: LogIn },
  {
    path: "dashboard",
    Component: Dashboard,
    children: [
      { path: "", Component: StudentList },
      { path: "/dashboard/addStudent", Component: AddStudent },
      { path: "/dashboard/studentList", Component: StudentList },
      { path: "/dashboard/updateStudent", Component: UpdateStudent },
      { path: "/dashboard/addFaculty", Component: AddFaculty },
      { path: "/dashboard/facultyList", Component: FacultyList },
      { path: "/dashboard/updateFaculty", Component: UpdateFaculty },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;
