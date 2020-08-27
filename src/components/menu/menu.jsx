import React from "react"
import { Card, CardActions, Collapse, CardContent} from '@material-ui/core';
import { BuildCustomCard } from './factory'
import * as PrefKeys from '../../cookies/preferences'
import * as Style from './templates'
import Theme, * as theme from '../theme/theme'
import './styles.css'

function onEmptyMenu() {
    return (
        <CardContent>
            <label>Nothing to do here</label>
        </CardContent>
    )
} 

function encapsuleItem(item) {
    return (
        <CardActions>
            {item}
        </CardActions>
    )
}

export default class Menu extends Theme {
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
        const menuItems = this.state.items && this.state.items.length > 0?
                          this.state.items.map((item) =>
                              encapsuleItem(item)
                          ) : onEmptyMenu();

        return(
            <Collapse in={this.props.visible || this.state.visible}
                className={`OptionsMenu ${theme.getThemeClass()}`}>
                <CustomCard variant="outlined"
                    onMouseEnter={this.onMouseEnterHandler}
                    onMouseLeave={this.onMouseLeaveHandler}>
                        {menuItems}
                </CustomCard>
            </Collapse>
        )
    }

}