import React from "react";
import "./AsideText.css";

const AsideText = (props) => {
  return (
    <div className="sideBarWrapper ">
      <div className="sideBar">
        {props.textsNames.map((text) => {
          return (
            <div
              className={`textHeader ${"text" + text.id} ${
                text.id == props.curentTextId && "selected"
              }`}
              onClick={(event) => {              
                props.showText(text);
                props.selectText(text.id);
              }}
            >
              {text.name}
            </div>
          );
        })}
      </div>
      <div></div>
    </div>
  );
};
export default AsideText;
