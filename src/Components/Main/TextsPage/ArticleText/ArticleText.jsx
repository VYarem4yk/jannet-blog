import React from "react";
import "./ArticleText.css";

const ArticleText = (props) => {
  return (
    <div className="curentTextWrapper">
      <h3 className="curentTextHeading">{props.curentText.name}</h3>
      {/*       <div className="curentText"> {props.curentText.createDate}</div> */}
      <div className="curentText">{props.curentText.text}</div>
    </div>
  );
};
export default ArticleText;
