import React, { useState } from "react";

const Twelve = () => {
  const [file, setFile] = useState(null);
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };
  return (
    <div className="flex flex-col gap-2 items-center justify-center h-screen">
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {file && (
        <img
          className="w-[200px] h-[200px]"
          src={URL.createObjectURL(file)}
          alt="Uploaded image"
        />
      )}
    </div>
  );
};

export default Twelve;
