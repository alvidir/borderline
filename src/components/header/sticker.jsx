import React, { Component } from "react"
import Preferences, * as PrefKeys from '../../cookies/preferences'
import './styles.css'

const Title = 'Alvidir'
const Subtitle = "Let's worldbuilding"

class Sticker extends Component {
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
        let theme = Preferences.getTheme()
        return theme.charAt(0).toUpperCase() + theme.slice(1)
    }

    render() {
        const theme = this.theme() === PrefKeys.DefaultTheme? '' : this.theme()
        const source = `${process.env.PUBLIC_URL}/${this.state.theme}/alvidir.minimal.png`

        return(
            <a href="https://github.com/alvidir"
               className="Sticker">
                <div className="HorizontalBox">
                    <img className="MainIcon"
                        src={source}
                        alt=''/>
                    
                    <div>
                        <div className={`MainTitle ${theme}`}>{Title}</div>
                        <div className={`MainSubtitle ${theme}`}>{Subtitle}</div>
                    </div>
                </div>
            </a>
        )
    }
}

export default Sticker