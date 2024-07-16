import React, { useState } from "react";
import Star from "./6.png";
import Blue from "./4.png";
import "./index.css";

const IndexActive = () => {
  const [current, setCurrent] = useState(3);
  const [activeStars, setActiveStars] = useState(Array(25).fill(false));
  const [buttonText, setButtonText] = useState("START");

  const handleClick = (e) => {
    e.preventDefault();
    if (current === 3) {
      setCurrent(5);
    } else if (current === 5) {
      setCurrent(7);
    }
  };

  const handleClickMinus = (e) => {
    e.preventDefault();
    if (current === 5) {
      setCurrent(3);
    } else if (current === 7) {
      setCurrent(5);
    }
  };

  const handleStartClick = () => {
    const newActiveStars = Array(25).fill(false);
    const indices = new Set();

    while (indices.size < (current === 3 ? 5 : current === 5 ? 3 : 2)) {
      const randomIndex = Math.floor(Math.random() * 25);
      indices.add(randomIndex);
    }

    indices.forEach((index) => {
      newActiveStars[index] = true;
    });

    setActiveStars(newActiveStars);
    setButtonText("START");
  };

  return (
    <>
      <div className="container">
        <span className="spans">1WIN MINES</span>
        <div className="staps">
          {[...Array(5)].map((_, rowIndex) => (
            <div className="cont-mines" key={rowIndex}>
              {[...Array(5)].map((_, colIndex) => {
                const index = rowIndex * 5 + colIndex;
                return (
                  <img
                    key={index}
                    src={activeStars[index] ? Star : Blue}
                    className="star"
                    alt=""
                  />
                );
              })}
            </div>
          ))}
        </div>
        <div className="d-flexbtn">
          <button className="btnss" onClick={handleClickMinus}>◀</button>
          <span className="spanss">{current}</span>
          <button className="btnss" onClick={handleClick}>▶</button>
          <button className="btnstart" onClick={handleStartClick}>{buttonText}</button>
        </div>
      </div>
    </>
  );
};

export default IndexActive;
