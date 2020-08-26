import React from "react"
import Theme from '../theme/theme'
import { TextField } from '@material-ui/core'
import { BuildCustomTextField } from './factory'
import * as PrefKeys from '../../cookies/preferences'
import * as Style from './styles'

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
            search_text: '',
            custom: this.getCustomStyle(),
        }
    }

    getCustomStyle() {
        switch (this.getTheme()) {
            case PrefKeys.DarkThemeName:
                return Style.DarkTheme()
        
            default:
                return Style.LightTheme()
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
            <CustomTextField id="main-search"
                             defaultValue={this.search_text}
                             className={`SearchBar ${this.props.size}`}
                             label="Discover worlds"
                             type="search"
                             size="small"
                             margin="light"
                             autoComplete="on"
                             variant="outlined"
                             onChange={this.handleChange}/>
        )
    }
}

export default SearchBar