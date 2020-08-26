import React from "react"

import Access from './access'
import Options from './options'
import Theme, * as theme from '../theme/theme'

import './styles.css'
import '../../styles/box.css'
import '../../styles/common.css'
import './styles.css'

class Navbar extends Theme {
    state = {}

    render() {
        const current_theme = theme.getThemeClass()

        return(
            <div className={`Header ${current_theme}`}>
                <nav className="Palette">
                    <Options />
                    <Access />
                </nav>
            </div>
        )
    }
}

export default Navbar