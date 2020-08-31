import React, { Component } from "react"
import GoogleLogin from "react-google-login"

import { LoginRequest } from "../../proto/session/login_pb"
import { SessionClient } from "../../proto/session/session_grpc_web_pb"

document.cookie = 'cross-site-cookie=google SameSite=None Secure'

const source_url = process.env.REACT_APP_PROTO_URL
const session_srv = process.env.REACT_APP_PROTO_SRV_SESSION
const session_client = new SessionClient(source_url + session_srv, null, null)
console.log("Set session client on ", source_url + session_srv)

export default class GoogleButton extends Component {
    state = {
        response: null,
    }

    onSourceResponse = (err, response) => {
        if (err) {
            console.log("Got an error from session service", err)
        }

        this.setState({ response: response })
    }

    onLoginSucceed = (response) => {
        console.log(response)
        console.log(response.profileObj)

        const req = new LoginRequest()
        req.setNickname("test")
        req.setEmail("test@testing.com")
        
        session_client.userLogin(req, {}, this.onSourceResponse)
    }

    onLoginFailed = (response) => {
        console.log(response, this)
        console.log(response.profileObj, this)
    }

    onRequest = () => {
        
    }

    render() {
        return (
            <React.Fragment>
                <GoogleLogin
                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                    buttonText="Login with Google"
                    cookiePolicy="single_host_origin"
                    onSuccess={this.onLoginSucceed}
                    onFailure={this.onLoginFailed}
                    onRequest={this.onRequest}
                />
            </React.Fragment>
        )
    }
}