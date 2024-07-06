import React, { useEffect, useState } from "react";
import { app } from "../Firebase";
import {
  collection,
  deleteDoc,
  getDocs,
  doc,
  getFirestore,
} from "firebase/firestore";
import { useNavigate } from "react-router";
const db = getFirestore(app);

const FacultyList = () => {
  const navigate = useNavigate();
  const [facultyData, setFacultyData] = useState([]);
  const handleFacultyList = async () => {
    const docRef = collection(db, "faculty");
    const getFacultyDocs = await getDocs(docRef);
    const data = getFacultyDocs.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setFacultyData(data);
  };

  useEffect(() => {
    handleFacultyList();
  });
  const deleteData = async (id) => {
    const dataRef = doc(db, "faculty", id);
    try {
      await deleteDoc(dataRef);
      getData();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h1 className="text-center font-bold mb-5 sticky top-[-20px] bg-white p-4 text-xl ">
        {" "}
        Faculty List
      </h1>
      <div className="px-3">
        {facultyData.length !== 0 ? (
          facultyData.map((faculty) => {
            return (
              <div
                key={faculty.id}
                className="border-2 mb-1 flex items-center justify-between gap-6 m-auto p-2 rounded-lg"
              >
                <div className="flex items-center mb-3 justify-center gap-5">
                  <p>
                    <span>
                      <b>Name: </b>
                      {faculty.facultyName}
                    </span>
                    {"            "}
                    <span>
                      <b>Phone no: </b>
                      {faculty.facultyPhone}
                    </span>
                  </p>
                </div>

                <div className="flex gap-2 items-center justify-center flex-wrap">
                  <button
                    onClick={() => {
                      deleteData(faculty.id);
                    }}
                    className="bg-purple-600 p-3 text-white rounded-lg"
                  >
                    Delete
                  </button>
                  <button
                    className="bg-purple-600 p-3 text-white rounded-lg"
                    onClick={() =>
                      navigate("/dashboard/updateFaculty", { state: faculty })
                    }
                  >
                    Update
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <div className="flex items-center justify-center">
            <h1 className=" text-red-800 text-2xl">
              No Faculty data available
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default FacultyList;
