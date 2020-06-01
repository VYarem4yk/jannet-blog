import React from "react";
import "../Navigation/Navigation.css";
import mail from "../../images/mail.png";
import text from "../../images/text.png";
import camera from "../../images/camera.png";
import { NavLink } from "react-router-dom";

let Navigation = () => {
  return (
    <nav className="navigationBar">
      <div className="navigatorContact navigation-component">
        <NavLink to="/contacts">
          <div className="navComponent">
            <div className="iconWrapper">
              <img src={mail} className="navigatorIcons" />
            </div>
            <div>Контакты</div>
          </div>
        </NavLink>
      </div>
      <div className="navigatorPhoto navigation-component">
        <NavLink to="/photos">
          <div className="navComponent">
            <div className="iconWrapper">
              <img src={camera} className="navigatorIcons" />
            </div>
            <div> Фото</div>
          </div>
        </NavLink>
      </div>
      <div className="navigatorTexts navigation-component">
        <NavLink to="/texts">
          <div className="navComponent">
            <div className="iconWrapper">
              <img src={text} className="navigatorIcons" />
            </div>
            <div>Тексты</div>
          </div>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
