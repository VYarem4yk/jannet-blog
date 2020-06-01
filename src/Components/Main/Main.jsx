import React from "react";
import "./Main.css";
import { Route } from "react-router-dom";
import TextsPageContainer from "./TextsPage/TextsPageContainer";
import PhotoPageContainer from "./PhotoPage/PhotoPageContainer/PhotoPageContainer";

const Main = () => {
  return (
    <main className="main">
      <div className="textPage">
        <Route
          path="/texts"
          render={() => <TextsPageContainer className="asideWrapper" />}
        />
      </div>
      <div className="photoPage">
        <Route path="/photos" render={() => <PhotoPageContainer />} />
      </div>
    </main>
  );
};
export default Main;
