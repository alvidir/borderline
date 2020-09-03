import React, { Fragment } from "react";
import "./Home.css";

import GoogleButton from "../../commons/button/google/login";


function Home() {
  return (
    <Fragment>
      <div className="HomeView">
        <GoogleButton/>
      </div>
    </Fragment>
  );
}

export default Home;
