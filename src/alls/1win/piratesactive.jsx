import React, { useState } from "react";
import Skull1 from "./1.png";
import Skull2 from "./2.png";
import Skull3 from "./3.png";
import Diamond from "./red.png";
import "./index.css";

import { useNavigate } from "react-router-dom";

  




const PiratesActive = () => {
   const language = localStorage.getItem("country")
  const navigate = useNavigate();

  const [activeSkull, setActiveSkull] = useState(null);
  const [buttonText, setButtonText] = useState("Play now");

  const handlePlayNowClick = () => {
    const randomSkull = Math.floor(Math.random() * 3) + 1;
    setActiveSkull(randomSkull);
    setButtonText("Next");
  };

  return (
    <>
      <div className="container">
        <span className="spans">1WIN BRAWL PIRATES</span>
        <div className="container-skull">
          <div className="stap">
            <div className="skull-container">
              {activeSkull === 1 && (
                <img src={Diamond} className="diamond" alt="Diamond" />
              )}
              <img
                src={Skull1}
                className={`skull ${activeSkull === 1 ? "up" : ""}`}
                alt="Skull 1"
              />
            </div>
            <div className="skull-container">
              {activeSkull === 2 && (
                <img src={Diamond} className="diamond" alt="Diamond" />
              )}
              <img
                src={Skull2}
                className={`skull ${activeSkull === 2 ? "up" : ""}`}
                alt="Skull 2"
              />
            </div>
            <div className="skull-container">
              {activeSkull === 3 && (
                <img src={Diamond} className="diamond" alt="Diamond" />
              )}
              <img
                src={Skull3}
                className={`skull ${activeSkull === 3 ? "up" : ""}`}
                alt="Skull 3"
              />
            </div>
          </div>
          <div className="stap-text">
            <button className="btnskull" onClick={handlePlayNowClick}>
              <span>{buttonText}</span>
            </button>
          </div>
        </div>
      </div>
      {language === "RUS" && (
        <button className="orqaga" onClick={() => navigate("/1win/pirates")}>
          {" "}
          ◀ НАЗАД
        </button>
      )}

      {language === "ENG" && (
        <button className="orqaga" onClick={() => navigate("/1win/pirates")}>
          {" "}
          ◀ BACK
        </button>
      )}

      {language !== "RUS" && language !== "ENG" && (
        <button className="orqaga" onClick={() => navigate("/1win/pirates")}>
          {" "}
          ◀ ORQAGA
        </button>
      )}
    </>
  );
};

export default PiratesActive;
