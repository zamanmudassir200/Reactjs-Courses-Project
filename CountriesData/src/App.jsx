import "./App.css";

function App() {
  const CountriesData = async () => {
    const apiUrl = "https://restcountries.com/v3.1/name/pakistan?fullText=true";
    try {
      const response = await fetch(apiUrl);
      let data = response.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  CountriesData();

  return (
    <>
      {}
      <h1>Countries Data</h1>
      <input type="text" placeholder="Search here.." />
      <p>{}</p>
    </>
  );
}

export default App;

// import React, { useEffect, useState } from "react";
// import "./App.css";

// function App() {
//   const [country, setCountry] = useState("");
//   const [countryData, setCountryData] = useState(null);
//   const [error, setError] = useState(null);

//   const fetchCountryData = async (countryName) => {
//     const apiUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
//     try {
//       const response = await fetch(apiUrl);
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       const data = await response.json();
//       setCountryData(data[0]); // Assuming you only want the first result
//     } catch (e) {
//       setError(e.message);
//     }
//   };

//   useEffect(() => {
//     fetchCountryData(country);
//   }, [country]);

//   const handleInputChange = (e) => {
//     setCountry(e.target.value);
//   };

//   return (
//     <div className="App">
//       <h1>Countries Data</h1>
//       <input
//         type="text"
//         placeholder="Search here.."
//         value={country}
//         onChange={handleInputChange}
//       />
//       {error && <p>Error: {error}</p>}
//       {countryData && (
//         <div>
//           <h2>{countryData.name.common}</h2>
//           <p>Capital: {countryData.capital}</p>
//           <p>Region: {countryData.region}</p>
//           <p>Population: {countryData.population}</p>
//           <img
//             src={countryData.flags[0]}
//             alt={`Flag of ${countryData.name.common}`}
//             width="100"
//           />
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
