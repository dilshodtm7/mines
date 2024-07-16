import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Pirates from "../../assets/pirates.webp";
import "./index.css";

const pirates = () => {
  const navigate = useNavigate();
  const Api = "https://pred-v2.onrender.com/auth/sign-in";
  const [id, setId] = useState("");

  const handleSubmit = (e, buttonId, loadingText) => {
    e.preventDefault();
    const button = document.getElementById(buttonId);
    button.innerHTML = loadingText;

    fetch(Api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 201) {
          localStorage.setItem("token", "bearer");
          localStorage.setItem("image", "Jet");
          navigate("/piratesactive");
        } else {
          navigate("/activate");
        }
      });
  };

  const language = localStorage.getItem("country");

  return (
    <div className="container">
      <div className="center">
        {language === "RUS" && (
          <>
            {" "}
            <form
              onSubmit={(e) => handleSubmit(e, "btn-j1", "Подождите")}
              className="form"
            >
              <img src={Pirates} className="jets" alt="Jet" />
              <label htmlFor="" className="label">
                Введите Свой 1WIN ID
              </label>
              <input
                required
                type="number"
                min="40000"
                max="9999999"
                onChange={(e) => setId(e.target.value)}
                className="inputs"
                placeholder="Введите Свой 1WIN ID"
              />
              <button type="submit" className="btn-submit" id="btn-j1">
                Вход
              </button>
            </form>
            <button className="orqaga" onClick={() => navigate("/")}>
              {" "}
              ◀ Назад
            </button>
          </>
        )}

        {language === "ENG" && (
          <>
            {" "}
            <form
              onSubmit={(e) => handleSubmit(e, "btn-j2", "WAIT")}
              className="form"
            >
              <img src={Pirates} className="jets" alt="Jet" />
              <label htmlFor="" className="label">
                Enter Your 1WIN ID
              </label>
              <input
                required
                type="number"
                min="40000"
                max="9999999"
                onChange={(e) => setId(e.target.value)}
                className="inputs"
                placeholder="Enter Your 1WIN ID"
              />
              <button type="submit" className="btn-submit" id="btn-j2">
                Submit
              </button>
            </form>
            <button className="orqaga" onClick={() => navigate("/")}>
              {" "}
              ◀ BACK
            </button>
          </>
        )}

        {language !== "RUS" && language !== "ENG" && (
          <>
            {" "}
            <form
              onSubmit={(e) => handleSubmit(e, "btn-j3", "KUTING")}
              className="form"
            >
              <img src={Pirates} className="jets" alt="Jet" />
              <label htmlFor="" className="label">
                1WIN ID kiriting
              </label>
              <input
                required
                type="number"
                min="40000"
                max="9999999"
                onChange={(e) => setId(e.target.value)}
                className="inputs"
                placeholder="1WIN ID kiriting"
              />
              <button type="submit" className="btn-submit" id="btn-j3">
                Kirish
              </button>
            </form>
            <button className="orqaga" onClick={() => navigate("/")}>
              {" "}
              ◀ ORQAGA
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default pirates;
