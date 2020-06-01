import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="headerWrapper">
      <div className="headerPhoto"></div>
      <div className="sloganWrapper">
        <span className="headerText">Жанна Корсунова</span>
        <span className="headerSlogan">Ни дня без строчки</span>
      </div>
    </header>
  );
};

export default Header;
