import React from "react"
import Theme from './theme'
import './styles.css'

const Title = 'Alvidir'
const Subtitle = "Let's worldbuilding"

class Sticker extends Theme {
    state = {}

    render() {
        const theme = this.getThemeClass()
        const source = `${process.env.PUBLIC_URL}/${this.getTheme()}/alvidir.minimal.png`

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