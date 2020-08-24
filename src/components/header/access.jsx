import React, { Component } from "react"
import Preferences, * as PrefKeys from '../../cookies/preferences'
import { Button } from '@material-ui/core';

class Access extends Component {
    state = {
        theme: PrefKeys.DefaultTheme,
    }

    constructor(props) {
        super(props)
        Preferences.attach(this)
        this.onPreferencesUpdate = this.onPreferencesUpdate.bind(this)

        this.state = {
            theme: props.theme?? PrefKeys.DefaultTheme,
        }
    }

    onPreferencesUpdate(name) {
        if (name === PrefKeys.ThemeKey) {
            this.setState({
                theme: Preferences.getTheme()?? PrefKeys.DefaultTheme,
            })
        }
    }

    theme() {
        const theme = Preferences.getTheme()
        return theme.charAt(0).toUpperCase() + theme.slice(1)
    }

    render() {
        const theme = this.theme() === PrefKeys.DefaultTheme? '' : this.theme()

        return(
            <div className="Access">
                <Button size="small"
                        variant="outlined"
                        className={`Action Signin ${theme}`}
                        onClick={() => { console.log('Sign in'); }}>
                    Sign in
                </Button>
                <Button size="small"
                        className={`Action Signup ${theme}`}
                        onClick={() => { console.log('Sign up'); }}>
                    Sign up
                </Button>
            </div>
        )
    }
}

export default Access;