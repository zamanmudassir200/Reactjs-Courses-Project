import React, { useEffect, useState } from "react";

const Seven = () => {
  const [time, setTime] = useState(60);
  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => {
        setTime(time - 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [time]);
  return <div>Time left: {time}</div>;
};

export default Seven;
