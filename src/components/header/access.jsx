import React from "react"
import Theme from '../theme/theme'
import * as Factory from './factory' 
import { Link } from 'react-router-dom'

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
                <Link to="/login">
                    <LoginButton size="small"
                                variant="outlined"
                                onClick={() => this.onClickHandler('Signin')}>
                        {LoginButtonTitle}
                    </LoginButton>
                </Link>
                <Link to="/signup">
                    <SignupButton size="small"
                                onClick={() => this.onClickHandler('Signup')}>
                        {SignupButtonTitle}
                    </SignupButton>
                </Link>
            </div>
        )
    }
}
