import React from "react"
import { Card, CardActions, Collapse} from '@material-ui/core';
import SwitchTheme from '../theme/switch'
import Theme from '../theme/theme'
import './styles.css'

class Menu extends Theme {
    state = {
        items: undefined,
        visible: false,
    }

    constructor(props) {
        super(props)
        this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this)
        this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this)
    }

    onMouseEnterHandler(name){
        this.setState({
            visible: true
        })
    }

    onMouseLeaveHandler(name){
        this.setState({
            visible: false
        })
    }

    render() {
        return(
            <Collapse in={this.props.visible || this.state.visible}
                      className={`OptionsMenu ${this.getThemeClass()}`}>
                <Card variant="outlined"
                      onMouseEnter={this.onMouseEnterHandler}
                      onMouseLeave={this.onMouseLeaveHandler}>
                    <CardActions>
                        <SwitchTheme />
                    </CardActions>
                </Card>
            </Collapse>
        )
    }

}

export default Menu