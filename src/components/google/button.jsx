import React, { Component } from "react";
import "./google.css";

/*export default */
class GoogleButton extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <button className="GoogleButton">Click Me</button>
      </React.Fragment>
    );
  }

  //parseCount() {
  //  const { count } = this.state; // get count value from state
  //  return count === 0 ? "Zero" : count;
  //}
}

export default GoogleButton;
