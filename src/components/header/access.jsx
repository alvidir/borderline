import React from "react"
import { Button } from '@material-ui/core'
import Theme, * as theme from '../theme/theme'

const LoginButtonTitle = 'Log in'
const SignupButtonTitle = 'Sign up'

class Access extends Theme {
    state = {}

    constructor(props) {
        super(props)
        this.onClick = this.onClickHandler.bind(this)
    }

    onClickHandler(name){
    }

    render() {
        const current_theme = theme.getThemeClass()

        return(
            <div className="Access">
                <Button size="small"
                        variant="outlined"
                        className={`Action Signin ${current_theme}`}
                        onClick={() => this.onClickHandler('Signin')}>
                    {LoginButtonTitle}
                </Button>
                <Button size="small"
                        className={`Action Signup ${current_theme}`}
                        onClick={() => this.onClickHandler('Signup')}>
                    {SignupButtonTitle}
                </Button>
            </div>
        )
    }
}

export default Access;