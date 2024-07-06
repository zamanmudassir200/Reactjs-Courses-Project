import React, { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "../Firebase";
import { useNavigate } from "react-router";

const AddFaculty = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const handleSubmitBtn = async (e) => {
    if (name && phone !== "") {
      e.preventDefault();
      console.log(name, phone);
      const db = getFirestore(app);
      const docRef = await addDoc(collection(db, "faculty"), {
        facultyName: name,
        facultyPhone: phone,
      })
        .then((res) => {
          navigate("/dashboard/facultyList");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className="mt-3">
      <h1 className="text-center font-bold text-xl">Add faculty</h1>
      <form className="flex flex-col gap-4" action="" onClick={handleSubmitBtn}>
        <input
          className="border-2 "
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="enter full name"
        />
        <input
          className="border-2 "
          onChange={(e) => setPhone(e.target.value)}
          type="number"
          placeholder="enter phone number"
        />
        <button
          className="bg-purple-500 text-white p-2 rounded-lg"
          type="submit"
          // onClick={handleSubmitBtn}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddFaculty;
