import React from "react";
import SwitchButton from '../button/switch';
import Preferences, * as PrefKeys from '../../cookies/preferences'
import { grey } from '@material-ui/core/colors';
import Theme from './theme'

class SwitchTheme extends Theme {
    state = {}

    constructor(props) {
        super(props);
        this.onSwitchTheme = this.onSwitchTheme.bind(this)
    }

    onSwitchTheme() {
        switch (this.getTheme()) {
            case PrefKeys.LightThemeName:
                Preferences.setTheme(PrefKeys.DarkThemeName)
                break
        
            default:
                Preferences.setTheme(PrefKeys.LightThemeName)
                break
        }
    }

    render() {
        return (
            <SwitchButton size="small"
                          checked={this.state.theme === PrefKeys.DarkThemeName}
                          handler={this.onSwitchTheme}
                          colorOff={grey[800]}
                          colorOn={grey[400]}/>
        );
    }
}

export default SwitchTheme;