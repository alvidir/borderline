import React, { Component } from "react"
import Preferences, * as PrefKeys from '../../cookies/preferences'

import Access from './access'
import Options from './options'

import './styles.css'
import '../../styles/box.css'
import '../../styles/common.css'
import './styles.css'

class Navbar extends Component {
    state = {
        theme: PrefKeys.DefaultTheme,
    }

    constructor(props) {
        super(props)
        Preferences.attach(this)
        this.onPreferencesUpdate = this.onPreferencesUpdate.bind(this)
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
            <div className={`Header ${theme}`}>
                <nav className="Palette">
                    <Options theme={this.state.theme}/>
                    <Access theme={this.state.theme}/>
                </nav>
            </div>
        )
    }
}

export default Navbar