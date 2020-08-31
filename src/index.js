import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppContainer from "./App";
import * as serviceWorker from "./serviceWorker";

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AppContainer>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/login" component={Login}/>
        </Switch>
      </AppContainer>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
