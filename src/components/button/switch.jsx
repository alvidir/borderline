import React, { Component } from "react"
import { BuildCustomSwitch } from './factory'
import { DefaultTheme } from './templates'

class SwitchButton extends Component {
    CustomSwitch = undefined

    state = {
        custom: undefined,
        checked: false,
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

    handleSwitchAdapter() {
        this.setState({ checked: !this.state.checked })
        //this.state.onSwitch(this)
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

export default SwitchButton