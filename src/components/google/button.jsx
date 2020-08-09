import React, { Component } from "react";
import GoogleLogin from "react-google-login";

import { User } from "../../proto/model/user_pb"
import { Response } from "../../proto/client/source_pb"
import { LoginClient } from "../../proto/client/source_grpc_web_pb"

const srv = new LoginClient(process.env.REACT_APP_SOURCE_URL);

/*export default */
class GoogleButton extends Component {
  state = {
    response: null,
  };

  onLoginResponse = (err, response) => {
    if (err) {
      console.log("error get reservation", err);
    }

    this.setState({ response: response })
  }

  onLoginSucceed = (response) => {
    console.log(response);
    console.log(response.profileObj);

    const req = new User()
    req.setNickname("test")
    req.setEmail("test@testing.com")

    srv.userLogin(req, {}, this.onLoginResponse)
  };

  onLoginFailed = (response) => {
    console.log(response);
    console.log(response.profileObj);
  };

  render() {
    return (
      <React.Fragment>
        <script crossorigin src="..."></script>
        <GoogleLogin
          clientId={process.env.REACT_APP_CLIENT_ID}
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
