import React, { useState } from "react";

const Five = () => {
  const [isToggle, setIsToggle] = useState(false);
  const handleToggle = () => {
    setIsToggle(!isToggle);
  };
  return (
    <div>
      5-
      <label htmlFor="Swicth">Switch:</label>
      <input type="checkbox" onChange={handleToggle} />{" "}
      <p>{isToggle ? "ON" : "OFF"}</p>
    </div>
  );
};

export default Five;
