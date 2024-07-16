import React, { useState, useEffect } from "react";
import Jet from "../assets/Lucky-Jet.jpg";
import Avia from "../assets/avi.png";
import Rocket from "../assets/796987.png";
import Mines from "../assets/mines.webp";
import Bombucks from "../assets/bombucks.webp";
import Pirates from "../assets/pirates.webp";
import Royal from "../assets/royal.webp";
import "./index.css";
import { Link } from "react-router-dom";

const index = () => {






const language = localStorage.getItem("country");


 
 if(language === "RUS"){
  return (
    <div className="container">
      <span className="spans">1WIN Взлом</span>
      <div className="d-flexbtn">
      <Link to="/1win/jet">
        <button className="btn">
          <img src={Jet} className="jet" alt="" />
        </button>
        </Link>

        <Link to="/1win/aviator">
        <button className="btn">
          <img src={Avia} className="jet" alt="" />
        </button>
        </Link>
        <Link to="/1win/mines">
        <button className="btn">
          <img src={Mines} className="jet" alt="" />
        </button>
        </Link>
        {/* <Link to="/1win/bombucks">
        <button className="btn">
          <img src={Bombucks} className="jet" alt="" />
        </button>
        </Link> */}
        <Link to="/1win/pirates">
        <button className="btn">
          <img src={Pirates} className="jet" alt="" />
        </button>
        </Link>
        {/* <Link to="/1win/royal">
        <button className="btn">
          <img src={Royal} className="jet" alt="" />
        </button>
        </Link> */}

      </div>

    </div>
  );

 }
 
 else if(language === "ENG"){

  return (
    <div className="container">
      <span className="spans">1WIN HACK</span>
      <div className="d-flexbtn">
      <Link to="/1win/jet">
        <button className="btn">
          <img src={Jet} className="jet" alt="" />
        </button>
        </Link>

        <Link to="/1win/aviator">
        <button className="btn">
          <img src={Avia} className="jet" alt="" />
        </button>
        </Link>
        <Link to="/1win/mines">
        <button className="btn">
          <img src={Mines} className="jet" alt="" />
        </button>
        </Link>
        {/* <Link to="/1win/bombucks">
        <button className="btn">
          <img src={Bombucks} className="jet" alt="" />
        </button>
        </Link> */}
        <Link to="/1win/pirates">
        <button className="btn">
          <img src={Pirates} className="jet" alt="" />
        </button>
        </Link>
        {/* <Link to="/1win/royal">
        <button className="btn">
          <img src={Royal} className="jet" alt="" />
        </button>
        </Link> */}

      </div>
    </div>
  );
 } 






  return (
    <div className="container">
      <span className="spans">1WIN O'YINLARI UCHUN</span>
      <div className="d-flexbtn">
      <Link to="/1win/jet">
        <button className="btn">
          <img src={Jet} className="jet" alt="" />
        </button>
        </Link>

        <Link to="/1win/aviator">
        <button className="btn">
          <img src={Avia} className="jet" alt="" />
        </button>
        </Link>
        <Link to="/1win/mines">
        <button className="btn">
          <img src={Mines} className="jet" alt="" />
        </button>
        </Link>
        {/* <Link to="/1win/bombucks">
        <button className="btn">
          <img src={Bombucks} className="jet" alt="" />
        </button>
        </Link> */}
        <Link to="/1win/pirates">
        <button className="btn">
          <img src={Pirates} className="jet" alt="" />
        </button>
        </Link>
        {/* <Link to="/1win/royal">
        <button className="btn">
          <img src={Royal} className="jet" alt="" />
        </button>
        </Link> */}

      </div>
    </div>
  );
};

export default index;
