import React from 'react'
import Theme, * as theme from '../../theme/theme'
import SwitchTheme from '../../theme/switch'
import '../styles.css'

export function WithCustomTheme(array) {
    array.push(<CustomTheme />)
    return array
}

export default class CustomTheme extends Theme {
    state = {}

    render() {
        return (
            <div className="MenuItem">
                <div className={`MenuItemHeader ${theme.getThemeClass()}`}>
                    <label>Customize</label>
                </div>
                <hr className={`MenuSeparator ${theme.getThemeClass()}`}/>
                <div className={`MenuItemBody ${theme.getThemeClass()}`}>
                    <div className="MenuBlock">
                        <label>Dark mode</label>
                    </div>
                    <SwitchTheme/>
                </div>
            </div>
        )
    }
}