import React, { Fragment } from "react";
//import logo from "./logo.svg";
import "./styles/app.css";

import GoogleButton from "./components/google/button";
import Wallpaper from "./components/wallpaper/view";
import Header from "./components/header/navbar";
import Foot from "./components/footer/foot";


function App() {
  return (
    <Fragment>
      <Header/>
      <Wallpaper >
        <GoogleButton/>
      </Wallpaper>
      <Foot />
    </Fragment>
  );
}

export default App;
