import React from "react"
import Theme, * as theme from '../theme/theme'
import { TextField } from '@material-ui/core'
import { BuildCustomTextField } from './factory'
import * as PrefKeys from '../../cookies/preferences'
import * as Style from './templates'
import './styles.css'

const LabelText = "Discover worlds"

class SearchBar extends Theme {
    search_text = ''

    state = {
        custom: undefined,
    }

    constructor(props) {
        super(props)
        this.onPreferencesUpdate = this.onPreferencesUpdate.bind(this)
        this.getCustomStyle = this.getCustomStyle.bind(this)
        this.handleChange = this.handleChange.bind(this)

        this.state = {
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

    handleChange(event) {
        this.search_text = event.target.value
    }

    render() {
        const CustomTextField = this.state.custom? BuildCustomTextField(this.state.custom) : TextField

        return(
            <div className={`Shape ${theme.getThemeClass()}`}>
                <CustomTextField id="main-search"
                                 defaultValue={this.search_text}
                                 label={LabelText}
                                 size="small"
                                 autoComplete="on"
                                 variant="outlined"
                                 onChange={this.handleChange}/>
            </div>
        )
    }
}

export default SearchBar