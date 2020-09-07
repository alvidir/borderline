import React, { Fragment } from "react";
import { Grid } from "@material-ui/core"
import "./Home.css";

import GoogleButton from "../../commons/button/google/login";


function Home() {
  return (
    <Fragment>
      <div className="HomeView">
        <Grid container className="HomeSegmentation">
          <Grid item xs={12} sm={7}>
            
          </Grid>
          <Grid item xs={12} sm={5}>
            <GoogleButton/>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
}

export default Home;
