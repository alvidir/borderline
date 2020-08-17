import React from "react";
import logo from "./logo.svg";
import "./App.css";

import GoogleButton from "./components/google/button";
import Wallpaper from "./components/wallpaper/view";

function App() {
  return (
  <div>
    <GoogleButton />
    <Wallpaper/>
  </div>
  );
}

export default App;
