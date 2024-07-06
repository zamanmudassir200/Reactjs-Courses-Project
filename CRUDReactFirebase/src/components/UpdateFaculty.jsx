import React, { useState } from "react";
import { getFirestore, doc, updateDoc } from "firebase/firestore";
import { app } from "../Firebase";
import { useLocation, useNavigate } from "react-router";

const UpdateFaculty = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [name, setName] = useState(location.state.facultyName);
  const [phone, setPhone] = useState(location.state.facultyPhone);
  const handleUpdateBtn = async (e) => {
    e.preventDefault();
    const db = getFirestore(app);
    const docRef = doc(db, "faculty", location.state.id);
    await updateDoc(docRef, { facultyName: name, phone: phone })
      .then((res) => {
        navigate("/dashboard/facultyList");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="mt-3">
      <h1 className="text-center font-bold text-xl">Update faculty</h1>
      <form className="flex flex-col gap-4">
        <input
          value={name}
          className="border-2 "
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="enter full name"
        />
        <input
          value={phone}
          className="border-2 "
          onChange={(e) => setPhone(e.target.value)}
          type="number"
          placeholder="enter phone number"
        />
        <button
          className="bg-purple-500 text-white p-2 rounded-lg"
          type="submit"
          onClick={handleUpdateBtn}
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateFaculty;
