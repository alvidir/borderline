import { Component } from "react"
import Preferences, * as PrefKeys from '../../cookies/preferences'

class Theme extends Component {
    state = {
        theme: PrefKeys.DefaultTheme,
    }

    constructor(props) {
        super(props)

        this.onPreferencesUpdate = this.onPreferencesUpdate.bind(this)
        Preferences.attach(this)

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

    getThemeClass() {
        let theme = Preferences.getTheme()
        theme = theme.charAt(0).toUpperCase() + theme.slice(1)
        return theme === PrefKeys.DefaultTheme? '' : theme
    }

    getTheme() {
        return Preferences.getTheme()
    }
}

export default Theme