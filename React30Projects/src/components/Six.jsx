import React, { useEffect, useState } from "react";

const Six = () => {
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // });

  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const data_fetched = await response.json();
        console.log(data_fetched);
        setData(data_fetched);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="w-full px-3 py-5">
      {data ? (
        <div className="flex flex-wrap gap-4 ">
          {data.map((d) => {
            return (
              <div className="bg-gray-400 w-[300px] p-3 rounded-lg " key={d.id}>
                <h1>Title:{d.title}</h1>
                <p>UserId: {d.userId}</p>
                <p>Id: {d.id}</p>
                <p>Completed: {d.completed ? "True" : "False"}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <p>Loading....</p>
      )}
    </div>
  );
};

export default Six;
