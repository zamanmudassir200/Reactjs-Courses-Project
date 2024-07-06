import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Card = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const apiUrl = "https://jsonplaceholder.typicode.com/todos/";
    const fetchApi = async (apiUrl) => {
      try {
        let response = await fetch(apiUrl);
        let data = await response.json();
        setData(data);
        setFilteredData(data);
        setError(null);
      } catch (e) {
        setError("Failed to fetch data");
        console.log(e);
      }
    };
    fetchApi(apiUrl);
  }, []);

  const handleSearchInput = (e) => {
    setSearch(e.target.value);
    filterData(e.target.value);
  };

  const filterData = (searchTerm) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const filtered = data.filter((item) => {
      return (
        item.title.toLowerCase().includes(lowerCaseSearchTerm) ||
        item.id.toString().includes(lowerCaseSearchTerm) ||
        (item.completed ? "yes" : "no").includes(lowerCaseSearchTerm)
      );
    });
    setFilteredData(filtered);
  };

  const highlightSearchTerm = (text, searchTerm) => {
    const regex = new RegExp(`(${searchTerm})`, "gi");
    return text.replace(regex, "<mark>$1</mark>");
  };

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.004 }}
        whileTap={{ scale: 1 }}
        drag="x"
        dragConstraints={{ left: 0, right: 20 }}
      >
        <div className="flex items-center justify-center py-4">
          <input
            type="text"
            value={search}
            onChange={handleSearchInput}
            className="py-3 px-2 outline-none border-4 font-bold border-purple-400 rounded-lg focus:border-purple-800 bg-purple-200 text-black text-xl w-[30%]"
            placeholder="Search by title, ID or completed status"
          />
        </div>
        <div className="mx-auto p-4 cursor-pointer">
          {error ? (
            <div className="error font-bold text-center text-2xl text-red-500">
              {error}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredData.map((item) => (
                <div
                  key={item.id}
                  className="bg-purple-400 text-black p-4 border-2 rounded-lg"
                >
                  <h2
                    className="text-black font-bold"
                    dangerouslySetInnerHTML={{
                      __html: highlightSearchTerm(item.title, search),
                    }}
                  ></h2>
                  <p className="text-gray-800">User ID: {item.userId}</p>
                  <p className="text-gray-800">
                    Completed: {item.completed ? "Yes" : "No"}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Card;
