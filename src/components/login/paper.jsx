import React, { Component } from 'react'
import { Paper } from "@material-ui/core"
import './styles.css'

import GoogleButton from "../../commons/button/google/login"

export default class LoginCard extends Component {
    state = {}

    render() {
        return(
            <Paper className="LoginPaper"
                    elevation={3}
                    /*variant="outlined"*/ >
                <GoogleButton/>
            </Paper>
        )
    }
}