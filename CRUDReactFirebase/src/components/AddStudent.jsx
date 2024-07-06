import React, { useState } from "react";
import { app } from "../Firebase.js";
import { getDatabase, set, ref } from "firebase/database";
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { useNavigate } from "react-router";

const AddStudent = () => {
  const [id, setId] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const db = getDatabase(app);
    const storage = getStorage(app);
    const fileRef = storageRef(storage, `images/${id}`);
    await uploadBytes(fileRef, selectedFile);
    const imageURL = await getDownloadURL(fileRef);
    set(ref(db, "student/" + id), {
      Email: email,
      Password: password,
      imageURL: imageURL,
    })
      .then((res) => {
        navigate("/dashboard/studentList");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="w-[80%] mr-[40px] sm:w-[95%]  ">
      <div className="border-2 p-6 mt-4 mx-2   rounded-lg">
        <h1 className="text-center font-bold text-xl">Add Student</h1>

        <form className="flex flex-col gap-2" action="" onSubmit={handleSubmit}>
          <label htmlFor="">ID</label>
          <input
            onChange={(e) => setId(e.target.value)}
            className="p-1 rounded-md"
            type="number"
            value={id}
            required
            placeholder="enter id"
          />
          <label htmlFor="">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="p-1 rounded-md"
            type="email"
            value={email}
            required
            placeholder="enter email"
          />
          <label htmlFor="">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="p-1 rounded-md"
            type="password"
            value={password}
            required
            placeholder="enter password"
          />
          <input type="file" onChange={handleFileChange} />
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-purple-500 font-bold text-white p-2 rounded-lg"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
