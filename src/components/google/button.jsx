import React, { Component } from "react";
import GoogleLogin from "react-google-login";

/*export default */
class GoogleButton extends Component {
  state = {};

  onLoginSucceed = (response) => {
    console.log(response);
    console.log(response.profileObj);
  };

  onLoginFailed = (response) => {
    console.log(response);
    console.log(response.profileObj);
  };

  render() {
    return (
      <React.Fragment>
        <GoogleLogin
          clientId={process.env.REACT_APP_OAUTH_CLIENT_ID}
          buttonText="Login with Google"
          cookiePolicy="single_host_origin"
          onSuccess={this.onLoginSucceed}
          onFailure={this.onLoginFailed}
        />
      </React.Fragment>
    );
  }
}

export default GoogleButton;
