import React, { Component } from "react"
import Preferences, * as PrefKeys from '../../cookies/preferences'
import '../../styles/footer.css'

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
        return(
            <div className={`Footer ${this.theme()}`}>
            </div>
        )
    }
}

export default Foot