import React, { Component } from "react"
import Preferences, * as PrefKeys from '../../cookies/preferences'
import './styles.css'

class Foot extends Component {
    state = {
        theme: PrefKeys.DefaultTheme,
    };

    constructor(props) {
        super(props)
        Preferences.attach(this)
    }

    onPreferencesUpdate(name) {
        if (name === PrefKeys.ThemeKey) {
            this.setState({
                theme: Preferences.getTheme()?? PrefKeys.DefaultTheme,
            })
        }
    }

    theme() {
        const theme = this.state.theme
        return theme.charAt(0).toUpperCase() + theme.slice(1)
    }

    render() {
        const theme = this.theme() === PrefKeys.DefaultTheme? '' : this.theme()

        return(
            <div className={`Footer ${theme}`}>
            </div>
        )
    }
}

export default Foot