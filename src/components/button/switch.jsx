import React, { Component } from "react";
import { Switch } from '@material-ui/core';
import { BuildCustomSwitch } from './factory';

class SwitchButton extends Component {
    state = {
        checked: false,
        custom: undefined,
        name: 'switch' 
    }

    constructor(props) {
        super();
        this.state = {
            checked: props.checked?? false,
            name: props.name?? 'switch',
            custom: BuildCustomSwitch(props.ColorOff, props.ColorOn, props.ColorBg),
        }
    }

    setHandler(handlerFunc) {
        this.handleSwitch = handlerFunc;
    }

    setStyle(ColorOff, ColorOn, ColorBg) {
        this.setState({
            custom: BuildCustomSwitch(ColorOff?? this.props.ColorOff,
                                      ColorOn?? this.props.ColorOn,
                                      ColorBg?? this.props.ColorBg),
        });
    }

    handleSwitch = (event) => {
        this.setState({ checked: !this.state.checked });
    };

    render() {
        const CustomSwitch = this.state.custom?? Switch;

        return (
            <CustomSwitch
                checked={this.state.checked}
                onChange={this.handleSwitch}
                name={this.state.name}
            />
        );
    }
}

export default SwitchButton;