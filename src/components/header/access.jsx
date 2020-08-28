import React from "react"
import Theme from '../theme/theme'
import * as Factory from './factory' 

const LoginButtonTitle = 'Log in'
const SignupButtonTitle = 'Sign up'

export default class Access extends Theme {
    state = {}

    constructor(props) {
        super(props)
        this.onClick = this.onClickHandler.bind(this)
    }

    onClickHandler(name){
    }

    render() {
        const LoginButton = Factory.NewLoginButton()
        const SignupButton = Factory.NewSignupButton()

        return(
            <div className="Access">
                <LoginButton size="small"
                             variant="outlined"
                             onClick={() => this.onClickHandler('Signin')}>
                    {LoginButtonTitle}
                </LoginButton>
                <SignupButton size="small"
                              onClick={() => this.onClickHandler('Signup')}>
                    {SignupButtonTitle}
                </SignupButton>
            </div>
        )
    }
}
