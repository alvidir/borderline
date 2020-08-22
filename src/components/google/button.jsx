import React, { Component } from "react";
import GoogleLogin from "react-google-login";

import { User } from "../../proto/model/user_pb";
import { LoginClient } from "../../proto/login/login_grpc_web_pb";

document.cookie = 'cross-site-cookie=google; SameSite=None; Secure';

const source_url = process.env.REACT_APP_PROTO_URL;
const client_path = process.env.REACT_APP_SRV_CLIENT_PATH;
const srv = new LoginClient(source_url + client_path, null, null);
console.log("set login client on ", source_url + client_path);

/*export default */
class GoogleButton extends Component {
    state = {
        response: null,
    };

    onSourceResponse = (err, response) => {
        if (err) {
            console.log("Got an error on login", err);
        }

        this.setState({ response: response })
    }

    onLoginSucceed = (response) => {
        console.log(response);
        console.log(response.profileObj);

        const req = new User();
        req.setNickname("test");
        req.setEmail("test@testing.com");
        
        srv.userLogin(req, {}, this.onSourceResponse);
    };

    onLoginFailed = (response) => {
        console.log(response, this);
        console.log(response.profileObj, this);
    };

    onRequest = () => {
        console.log("on request");
    };

    render() {
        return (
            <React.Fragment>
                <GoogleLogin
                    clientId={process.env.REACT_APP_CLIENT_ID}
                    buttonText="Login with Google"
                    cookiePolicy="single_host_origin"
                    onSuccess={this.onLoginSucceed}
                    onFailure={this.onLoginFailed}
                    onRequest={this.onRequest}
                />
            </React.Fragment>
        );
    }
}

export default GoogleButton;