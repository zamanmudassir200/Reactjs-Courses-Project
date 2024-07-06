import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [city, setCity] = useState("");

  const fetchWeather = async () => {
    const apiKey = "89abf6effba0b8d53ee210cc9d0b52ec";

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    try {
      const response = await axios.get(apiUrl);
      const data = response.data;
      // console.log(data);
      setWeatherData(data);
      setError(null);
      setCity("");
    } catch (e) {
      console.error(e);
      setError("Failed to fetch weather data");
      setWeatherData(null);
    }
  };

  return (
    <div className=" flex flex-col max-w-[100vw]  bg-green-600  my-0 mx-auto h-screen items-center justify-start py-10">
      <div className="border-2 w-[90%] h-[700px] pt-8 flex flex-col items-center justify-start gap-4 rounded-lg px-2">
        <div className=" border-transparent overflow-hidden transition-all rounded-lg w-[100%] border-4 flex items-center justify-center  ">
          <div className="">
            <input
              onChange={(e) => {
                setCity(e.target.value);
              }}
              value={city}
              type="text"
              s
              placeholder="Search city..."
              className="py-4 px-2 w-[300px] hover:border-green-900 hover:scale-[1.06] transition-all rounded-l-lg border-2 outline-none "
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  if (city.length !== 0) {
                    fetchWeather();
                  }
                }
              }}
            />
            <button
              className="py-4 px-5 rounded-r-lg  border-2 border-l-0 hover:scale-[1.06] transition-all text-white font-semibold hover:bg-red-600 bg-red-500"
              onClick={fetchWeather}
            >
              Get
            </button>
          </div>
        </div>
        {error && <p className="error p-3 bg-red-400">{error}</p>}
        {weatherData && (
          <div className="weather-data rounded-lg  px-4 py-6 bg-white w-[60%] max-h-[100vh] flex flex-col items-center gap-6 shadow-lg">
            <div className="flex flex-col gap-6 w-[40%] p-4">
              <p className="font-semibold text-2xl ">
                Weather in{" "}
                <span className="font-bold text-2xl underline">
                  {weatherData.name}, {weatherData.sys.country}
                </span>
              </p>
              <p className="text-xl">
                Temperature:{" "}
                <span className="font-bold">
                  {(weatherData.main.temp - 273.15).toFixed(2)}°C
                </span>
              </p>
              <p className="text-xl">
                Weather:{" "}
                <span className="font-bold">
                  {weatherData.weather[0].description}{" "}
                </span>
              </p>
              <p className="text-xl">
                Humidity:{" "}
                <span className="font-bold">{weatherData.main.humidity}% </span>
              </p>
              <p className="text-xl">
                Wind Speed:{" "}
                <span className="font-bold">{weatherData.wind.speed} m/s </span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
