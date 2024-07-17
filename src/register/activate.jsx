import React from "react";
import { useNavigate } from "react-router-dom";

const activation = () => {
      const navigate = useNavigate();
const language = localStorage.getItem("country");

if (language === "UZ") {
  return (
    <>

      <div className="container-reg">
      <span className='spans'>Sizda botdan foydalanish uchun ruxsat yo'q</span>
        
        <hr className="hrr" />
        <span className="spans">AKTIVATSIYA</span>
        <div className="d-blocked">
        <a href="https://t.me/AviaBot_admin" className="a">
          <button className="btn-buy">AKTIVATSIYA QILISH</button>
        </a>
        
        </div>
        <button className="orqaga" onClick={() => navigate("/")}> ◀ Назад</button>
      </div>

      
      
    </>
  );
}

if (language === "ENG") {
  return (
    <>
      <div className="container-reg">
      <span className='spans'>You do not have permission to use the bot</span>
        
        <hr className="hrr" />
        <span className="spans">ACTIVATION</span>
        <div className="d-blocked">
        <a href="https://t.me/AviaBot_admin" className="a">
          <button className="btn-buy">ACTIVATE</button>
        </a>
        </div><button className="orqaga" onClick={() => navigate("/")}> ◀ BACK</button>
        </div>
        
      
    </>
  );
}

  return (
    <>
      <div className="container-reg">
      <span className='spans'>У вас нет разрешения для использование бота</span>
        
        <hr className="hrr" />
        <span className="spans">Активация</span>
        <div className="d-blocked">
        <a href="https://t.me/AviaBot_admin" className="a">
          <button className="btn-buy">Активировать</button>
        </a>
        
        </div>
        <button className="orqaga" onClick={() => navigate("/")}> ◀ ORQAGA</button>
      </div>
    </>
  );
};

export default activation;
