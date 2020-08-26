import React from "react"
import { Card, CardActions, Collapse} from '@material-ui/core';
import { BuildCustomCard } from './factory'
import * as PrefKeys from '../../cookies/preferences'
import * as Style from './templates'
import Theme, * as theme from '../theme/theme'
import './styles.css'

class Menu extends Theme {
    state = {
        visible: false,
        custom: undefined,
    }

    constructor(props) {
        super(props)
        this.getCustomStyle = this.getCustomStyle.bind(this)
        this.onPreferencesUpdate = this.onPreferencesUpdate.bind(this)
        this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this)
        this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this)

        this.state = {
            items: props.items?? undefined,
            custom: this.getCustomStyle(),
        }
    }

    getCustomStyle() {
        switch (theme.getTheme()) {
            case PrefKeys.DarkThemeName:
                return Style.DarkTheme()
        
            default:
                return Style.DefaultTheme()
        }
    }

    onPreferencesUpdate(name) {
        if (name === PrefKeys.ThemeKey) {
            
            this.setState({
                custom: this.getCustomStyle(),
            })
        }
    }

    onMouseEnterHandler(name){
        this.setState({
            visible: true
        })
    }

    onMouseLeaveHandler(name){
        this.setState({
            visible: false
        })
    }

    render() {
        const CustomCard = this.state.custom? BuildCustomCard(this.state.custom) : Card
        const menuItems = this.state.items? this.state.items.map((item) =>
            <div>{item}</div>
        ) : <label>Nothing to do here</label>;

        return(
            <Collapse in={this.props.visible || this.state.visible}
                      className={`OptionsMenu ${theme.getThemeClass()}`}>
                <CustomCard variant="outlined"
                      onMouseEnter={this.onMouseEnterHandler}
                      onMouseLeave={this.onMouseLeaveHandler}>
                    <CardActions>
                        {menuItems}
                    </CardActions>
                </CustomCard>
            </Collapse>
        )
    }

}

export default Menu