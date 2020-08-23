import React, { Component } from "react";
import { Switch } from '@material-ui/core';
import { BuildCustomSwitch } from './factory';

class SwitchButton extends Component {
    state = {
        custom: undefined,
        name: 'switch' 
    }

    constructor(props) {
        super();
        this.state = {
            name: props.name?? 'switch',

            custom: BuildCustomSwitch(props.colorOff, props.colorOn, props.colorBg),
        }

        this.handleSwitch = props.handler;
    }

    handleSwitch = (event) => {
        this.setState({ checked: !this.state.checked });
    };

    setStyle(colorOff, colorOn, colorBg) {
        this.setState({
            custom: BuildCustomSwitch(colorOff?? this.props.colorOff,
                                      colorOn?? this.props.colorOn,
                                      colorBg?? this.props.colorBg),
        });
    }

    render() {
        const CustomSwitch = this.state.custom?? Switch;

        return (
            <CustomSwitch
                onChange={this.handleSwitch}
                name={this.state.name}
            />
        );
    }
}

export default SwitchButton;