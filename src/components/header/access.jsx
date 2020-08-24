import React from "react"
import { Button } from '@material-ui/core'
import Theme from './theme'

class Access extends Theme {
    state = {}

    constructor(props) {
        super(props)
        this.onClick = this.onClick.bind(this)
    }

    onClick(e){
        console.log('Clicked')
        console.log(e)
    }

    render() {
        const theme = this.getThemeClass()

        return(
            <div className="Access">
                <Button size="small"
                        variant="outlined"
                        className={`Action Signin ${theme}`}
                        onClick={() => this.onClick('Signin')}>
                    Sign in
                </Button>
                <Button size="small"
                        className={`Action Signup ${theme}`}
                        onClick={() => this.onClick('Signup')}>
                    Sign up
                </Button>
            </div>
        )
    }
}

export default Access;