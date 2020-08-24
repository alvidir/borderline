import React from "react"

import Access from './access'
import Options from './options'
import Theme from './theme'

import './styles.css'
import '../../styles/box.css'
import '../../styles/common.css'
import './styles.css'

class Navbar extends Theme {
    state = {}

    render() {
        const theme = this.getThemeClass()

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