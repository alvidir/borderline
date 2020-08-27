import React from "react"
import Theme, * as theme from '../theme/theme'
import './styles.css'

export default class Foot extends Theme {
    state = {}

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return(
            <div className={`Footer ${theme.getThemeClass()}`}>
            </div>
        )
    }
}