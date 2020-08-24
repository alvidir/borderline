import React, { Fragment } from "react"
import Preferences, * as PrefKeys from '../../cookies/preferences'
import Sticker from './sticker'
import { grey } from '@material-ui/core/colors'
import { Button } from '@material-ui/core'
import { MoreHoriz } from '@material-ui/icons'
import SwitchButton from '../button/switch'
import Theme from './theme'
import './styles.css'

class Options extends Theme {
    state = {}

    constructor(props) {
        super(props)
        this.onSwitchTheme = this.onSwitchTheme.bind(this)
        this.onClick = this.onClick.bind(this)
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

    onClick(e){
        console.log('Clicked')
        console.log(e)
    }

    render() {
        const theme = this.getThemeClass()

        return(
            <Fragment>
                <Sticker className={`Item ${theme}`}W
                        theme={this.state.theme}/>
                <Button className="Discret">
                    <MoreHoriz className={`Item ${theme}`}
                            onClick={() =>  this.onClick('MoreOps')}/>
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