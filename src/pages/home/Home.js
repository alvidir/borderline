import React, { Fragment } from "react";
import { Grid } from "@material-ui/core"
import "./Home.css";

import LoginPaper from '../../components/login/paper'


function Home() {
  return (
    <Fragment>
      <div className="HomeView">
        <Grid container
              className="HomeSegmentation"
              direction="row"
              //alignItems="center"
              //justify="center"
              >
          <Grid item xs={12} sm={7}>
            
          </Grid>
          <Grid item xs={12} sm={5}>
            <div className="HomeRight">
              <LoginPaper />
            </div>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
}

export default Home;
