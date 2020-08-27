import React from "react"
import Theme, * as theme from '../theme/theme'
import './styles.css'

const Title = 'Alvidir'
const Subtitle = "Let's worldbuilding"

export default class Sticker extends Theme {
    state = {}

    render() {
        const current_theme = theme.getThemeClass()
        const source = `${process.env.PUBLIC_URL}/${theme.getTheme()}/alvidir.minimal.png`

        return(
            <a href="https://github.com/alvidir"
               className="Sticker">
                <div className="HorizontalBox">
                    <img className="MainIcon"
                        src={source}
                        alt=''/>
                    
                    <div>
                        <div className={`MainTitle ${current_theme}`}>{Title}</div>
                        <div className={`MainSubtitle ${current_theme}`}>{Subtitle}</div>
                    </div>
                </div>
            </a>
        )
    }
}