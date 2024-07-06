import React, { useEffect, useState } from "react";
import { getDatabase, onValue, ref, remove } from "firebase/database";
import { app } from "../Firebase";
import { getStorage, ref as storageRef, deleteObject } from "firebase/storage";
import { useNavigate } from "react-router";
const db = getDatabase(app);
const storage = getStorage(app);

const StudentList = () => {
  const [studentData, setStudentData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const databaseRef = ref(db, "student");
    onValue(databaseRef, (snapshot) => {
      const data = snapshot.val();
      //   console.log(data);
      setStudentData(data);
    });
  }, []);
  const deleteData = (key) => {
    console.log(key);
    const studentRef = ref(db, "student/" + key);
    const fileRef = storageRef(storage, `images/` + key);
    deleteObject(fileRef)
      .then((res) => {
        remove(studentRef);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div
      className={`${studentData === null ? "" : "overflow-y-scroll"} mt-0 p-3`}
    >
      <h1 className="text-center font-bold mb-5 sticky top-[-20px] bg-white p-4 text-xl">
        Student Lists
      </h1>
      {studentData ? (
        <div>
          {Object.entries(studentData).map(([key, value]) => {
            return (
              <div key={key} className="flex items-center px-2 justify-center">
                <li className="flex flex-wrap h-full w-[90%] rounded-lg  bg-blue-700 justify-center px-4 py-2 items-center   gap-2 mb-2">
                  <img
                    style={{
                      width: "80px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                    src={value.imageURL}
                    alt=""
                  />
                  <div className="">
                    <p className="text-center">
                      <b>Email:</b> {value.Email} <br /> <b> Password:</b>{" "}
                      {value.Password}
                    </p>
                  </div>
                  <div className="flex gap-2 flex-wrap items-center justify-center">
                    <button
                      onClick={() => deleteData(key)}
                      className="bg-white rounded-lg text-black font-semibold p-2"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() =>
                        navigate("/dashboard/updateStudent", {
                          state: [key, value],
                        })
                      }
                      className="bg-white rounded-lg text-black font-semibold p-2"
                    >
                      Update
                    </button>
                  </div>
                </li>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <h1 className=" text-red-800 text-2xl">No student data available</h1>
        </div>
      )}
    </div>
  );
};

export default StudentList;
