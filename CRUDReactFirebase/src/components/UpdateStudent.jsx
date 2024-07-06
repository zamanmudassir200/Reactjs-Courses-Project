import React, { useState } from "react";
import { app } from "../Firebase.js";
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { getDatabase, ref, update } from "firebase/database";
import { useNavigate, useLocation } from "react-router";

const UpdateStudent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  //   console.log(location);
  const [id, setId] = useState(location.state[0]);

  const [email, setEmail] = useState(location.state[1].Email);
  const [password, setPassword] = useState(location.state[1].Password);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedFile) {
      const db = getDatabase(app);
      const storage = getStorage(app);

      const fileRef = storageRef(storage, `images/${location.state[0]}`);
      await uploadBytes(fileRef, selectedFile);
      const imageURL = await getDownloadURL(fileRef);

      const studentRef = ref(db, "student/" + location.state[0]);
      update(studentRef, {
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
    } else {
      const db = getDatabase(app);

      const studentRef = ref(db, "student/" + location.state[0]);
      update(studentRef, {
        Email: email,
        Password: password,
      })
        .then((res) => {
          navigate("/dashboard/studentList");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className="min-w-[75%]">
      <div className="border-2 p-7 mt-4 rounded-lg">
        <h1 className="text-center font-bold text-xl">Update Student</h1>

        <form className="flex flex-col gap-2" action="" onSubmit={handleSubmit}>
          <label htmlFor="">ID</label>
          <input
            onChange={(e) => setId(e.target.value)}
            className="p-1 rounded-md"
            type="number"
            value={id}
            disabled
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
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateStudent;
