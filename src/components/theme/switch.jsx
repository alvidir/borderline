import React from "react";
import SwitchButton from '../button/switch/switch';
import Preferences, * as PrefKeys from '../../cookies/preferences'
import Theme, * as theme from './theme'

export default class SwitchTheme extends Theme {
    state = {}
    
    constructor(props) {
        super(props);
        this.onSwitchTheme = this.onSwitchTheme.bind(this)
    }

    onSwitchTheme() {
        switch (theme.getTheme()) {
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
            <SwitchButton size='small'
                          name='Switch Theme'
                          checked={theme.getTheme() === PrefKeys.DarkThemeName}
                          onSwitch={this.onSwitchTheme} />
        );
    }
}