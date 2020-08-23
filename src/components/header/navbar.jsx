import React, { Component } from "react"
import SwitchButton from '../button/switch'
import { grey } from '@material-ui/core/colors'
import Preferences, * as PrefKeys from '../../cookies/preferences'
import '../../styles/header.css'

class Navbar extends Component {
    state = {
        theme: PrefKeys.DefaultTheme,
    }

    constructor(props) {
        super(props)
        Preferences.attach(this)
        this.onPreferencesUpdate = this.onPreferencesUpdate.bind(this)
        this.onSwitchTheme = this.onSwitchTheme.bind(this)
    }

    onPreferencesUpdate(name) {
        if (name === PrefKeys.ThemeKey) {
            this.setState({
                theme: Preferences.getTheme()?? PrefKeys.DefaultTheme,
            })
        }
    }

    onSwitchTheme() {
        switch (this.state.theme) {
            case PrefKeys.LightThemeName:
                Preferences.setTheme(PrefKeys.DarkThemeName)
                break
        
            default:
                Preferences.setTheme(PrefKeys.LightThemeName)
                break
        }
    }

    theme() {
        const theme = this.state.theme
        return theme.charAt(0).toUpperCase() + theme.slice(1)
    }

    render() {
        console.log(this.state.theme === PrefKeys.DarkThemeName)
        return(
            <nav className={`Header ${this.theme()}`}>
                <a href="https://github.com/alvidir">
                    <img className="MainIcon"
                        src={`${process.env.PUBLIC_URL}/${this.state.theme}/alvidir.png`}
                        alt=''/>
                </a>
                <SwitchButton colorOff={grey[800]}
                              colorOn={grey[400]}
                              checked={this.state.theme === PrefKeys.DarkThemeName}
                              handler={this.onSwitchTheme}/>
            </nav>
        )
    }
}

export default Navbar