import React, { Component } from "react"
import { BuildCustomSquare } from './factory'
import { DefaultTheme } from './templates'

export default class SquareButton extends Component {
    state = {
        custom: undefined,
    }

    constructor(props) {
        super(props)

        this.state = {
            custom: props.custom?? DefaultTheme(),
        }
    }

    componentDidUpdate() {
        if (this.state.checked !== this.props.checked){
            // this lets the Switch animation to finish while the global theme changes as well
            setTimeout(this.state.onSwitch, 0 )
        }
    }

    render() {
        const CustomSquare = this.state.custom? BuildCustomSquare(this.state.custom) : Button

        return (
            <this.CustomSquare
                onClick={this.props.onClick}
                name={this.state.name}
                variant={this.props.variant}
            />
        )
    }
}
