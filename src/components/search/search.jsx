import React from "react"
import Theme, * as theme from '../theme/theme'
import * as factory from './factory'
import './styles.css'

const LabelText = "Discover worlds"

export default class SearchBar extends Theme {
    search_text = ''

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.search_text = event.target.value
    }

    render() {
        const CustomTextField = theme.onDefaultTheme()? factory.DefaultTheme() : factory.DarkTheme()

        return(
            <div className={`SearchShape ${theme.getThemeClass()}`}>
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
