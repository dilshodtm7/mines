import React, { useEffect, useState } from "react";
import Logo from "../assets/react.svg";

import "./index.css";

function GetCurrentAddress() {
  const [dateTime, setDateTime] = useState({ date: "", time: "" });
  const [error, setError] = useState("");

  const updateDateTime = () => {
    const now = new Date();

    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();

    setDateTime({ date, time });
  };

  useEffect(() => {
    updateDateTime();

    const intervalId = setInterval(updateDateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    if (selectedCountry === "RUS") {
      localStorage.setItem("country", "RUS");
      window.location.reload();
    } else if (selectedCountry === "ENG") {
      localStorage.setItem("country", "ENG");
      window.location.reload();
    } else if (selectedCountry === "UZ") {
      localStorage.setItem("country", "UZ");
      window.location.reload();
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("country")) {
      localStorage.setItem("country", "RUS");
    }
  }, []);

  return (
    <>
      <div className="header-container">
        <div className="time-zone">
          <p> {dateTime.date}</p>
          <p> {dateTime.time}</p>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>

        <div className="dd">
          {localStorage.getItem("country") === "RUS" ? (
            <span className="spans">Язык</span>
          ) : localStorage.getItem("country") === "ENG" ? (
            <span className="spans">Language</span>
          ) : (
            <span className="spans">TIL</span>
          )}

          <select id="mySelect" onChange={handleCountryChange}>
            {localStorage.getItem("country") === "RUS" ? (
              <option value="RUS" selected disabled>
                RU
              </option>
            ) : (
              <option value="RUS">RU</option>
            )}
            {localStorage.getItem("country") === "ENG" ? (
              <option value="ENG" selected disabled>
                ENG
              </option>
            ) : (
              <option value="ENG">ENG</option>
            )}
            {localStorage.getItem("country") === "UZ" ? (
              <option value="UZ" selected disabled>
                UZ
              </option>
            ) : (
              <option value="UZ">UZ</option>
            )}
          </select>
        </div>
      </div>
    </>
  );
}

export default GetCurrentAddress;
