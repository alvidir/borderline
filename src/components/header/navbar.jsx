import React, { Component } from "react";
import SwitchButton from '../button/switch';
import '../../styles/header.css';

class Navbar extends Component {
    state = {
        dark_mode: false,
    };

    render() {
        return(
            <nav className="Header">
                <a href="https://github.com/alvidir">
                    <img className="MainIcon"
                        src={`${process.env.PUBLIC_URL}/alvidir.dark.ico`}
                        alt=''/>
                </a>
                <SwitchButton/>
            </nav>
        )
    }
}

export default Navbar;