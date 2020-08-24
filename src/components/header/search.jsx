import React from "react"
import Theme from '../theme/theme'
import { TextField } from '@material-ui/core'
import { BuildCustomTextField } from './factory'
import './styles.css'

class SearchBar extends Theme {
    state = {
        search_text: '',
        custom: undefined,
    }

    constructor(props) {
        super(props)
        this.state = {
            search_text: '',
            custom: BuildCustomTextField('#1e1e1e', "#1e1e1e", "#1e1e1e"),
        }
    }

    render() {
        const theme = this.getThemeClass()
        const CustomTextField = this.state.custom?? TextField;

        return(
            <CustomTextField id="main-search"
                             className={`SearchBar ${theme}`}
                             label="Discover worlds"
                             type="search"
                             size="small"
                             autoComplete="on"
                             variant="outlined"/>
        )
    }
}

export default SearchBar