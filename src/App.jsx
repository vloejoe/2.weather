import loader from "./assets/loader.svg";
import "./App.css";
import Browser from "./assets/browser.svg";

const APIKEY = import.meta.env.VITE_WHEATHER_API_KEY;

import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [wheatherData, setWheatherData] = useState(null);
  const [errorInfo, setErrorInfo] = useState(null);

  useEffect(() => {
    fetch(`http://api.airvisual.com/v2/nearest_city?key=${APIKEY}`)
      .then((response) => {
        console.log(response);
        if (!response.ok)
          throw new Error(`Error ${response.statuts}, ${response.statusText}`);
        return response.json();
      })
      .then((responData) => {
        console.log(responData);
        setWheatherData({
          city: responData.data.city,
          country: responData.data.country,
          iconID: responData.data.current.weather.ic,
          temperature: responData.data.current.weather.tp,
        });
      })
      .catch((err) => {
        console.log(err);
        console.dir(err);
        setErrorInfo(err.message);
      });
  }, []);

  return (
    <>
      <main>
        <div
          className={`loader-container ${
            !wheatherData && errorInfo && "active"
          } `}
        >
          <img src={loader} className="loading icon" />
        </div>

        {wheatherData && (
          <>
            <p className="city-name">{wheatherData.city}</p>
            <p className="country-name">{wheatherData.country}</p>
            <p className="temperature">{wheatherData.temperature}° C</p>
            <div className="info-icon-container">
              <img
                className="info-icon"
                src={`/icons/${wheatherData.iconID}.svg`}
                alt="wheather"
              />
            </div>
          </>
        )}

        {errorInfo && !wheatherData && (
          <>
            <p className="error-information">{errorInfo}</p>
            <img src={Browser} alt="error icon" />
          </>
        )}
      </main>
    </>
  );
}

export default App;
