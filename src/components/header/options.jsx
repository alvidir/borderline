import React, { Component, Fragment } from "react"
import Preferences, * as PrefKeys from '../../cookies/preferences'
import Sticker from './sticker'
import { grey } from '@material-ui/core/colors'
import { Button } from '@material-ui/core';
import { MoreHoriz } from '@material-ui/icons'
import SwitchButton from '../button/switch'
import './styles.css'

class Options extends Component {
    state = {
        theme: PrefKeys.DefaultTheme,
    }

    constructor(props) {
        super(props)
        Preferences.attach(this)
        this.onPreferencesUpdate = this.onPreferencesUpdate.bind(this)
        this.onSwitchTheme = this.onSwitchTheme.bind(this)

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
        let theme = Preferences.getTheme()
        return theme.charAt(0).toUpperCase() + theme.slice(1)
    }

    render() {
        const theme = this.theme() === PrefKeys.DefaultTheme? '' : this.theme()

        return(
            <Fragment className="Options">
                <Sticker className={`Item ${theme}`}W
                        theme={this.state.theme}/>
                <Button className="Discret">
                    <MoreHoriz className={`Item ${theme}`}
                            onClick={() => { console.log('onClick'); }}/>
                </Button>
                <SwitchButton colorOff={grey[800]}
                            colorOn={grey[400]}
                            checked={this.state.theme === PrefKeys.DarkThemeName}
                            handler={this.onSwitchTheme}
                            className={`Item ${theme}`}/>
            </Fragment>
        )
    }
}

export default Options