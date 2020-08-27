import React, { Component } from "react"
import { BuildCustomSwitch } from './factory'
import { DefaultTheme } from './templates'

export default class SwitchButton extends Component {
    CustomSwitch = undefined

    state = {
        custom: undefined,
        checked: undefined,
        onSwitch: undefined,
    }

    constructor(props) {
        super(props)
        this.handleSwitchAdapter = this.handleSwitchAdapter.bind(this)

        this.state = {
            custom: props.custom?? DefaultTheme(),
            checked: props.checked,
            onSwitch: props.onSwitch,
        }
    }

    componentDidUpdate() {
        if (this.state.checked !== this.props.checked){
            // this lets the Switch animation to finish while the global theme changes as well
            setTimeout(this.state.onSwitch, 0 )
        }
    }

    handleSwitchAdapter() {
        this.setState({ checked: !this.state.checked })
    }

    render() {
        if (!this.CustomSwitch) {
            this.CustomSwitch = BuildCustomSwitch(this.state.custom)
        }

        return (
            <this.CustomSwitch
                onChange={this.handleSwitchAdapter}
                checked={this.state.checked}
                name={this.state.name}
            />
        )
    }
}
