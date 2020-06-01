import React, { Fragment } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import Main from "./Components/Main/Main";

function App() {
  return (
    <Fragment>
      <Header />
      <Navigation />
      <Main />
    </Fragment>
  );
}

export default App;
