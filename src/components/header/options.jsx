import React, { Fragment } from "react"
import Sticker from './sticker'
import { Button } from '@material-ui/core'
import { MoreHoriz } from '@material-ui/icons'
import Theme, * as theme from '../theme/theme'
import Menu from '../menu/menu'
import SearchBar from '../search/search'
import SwitchTheme from '../theme/switch'
import './styles.css'

const MoreHorizName = 'MoreOps'

class Options extends Theme {
    state = {
        MoreOpsMenuVisible: false,
        FixMoreOps: false,
    }

    constructor(props) {
        super(props)
        this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this)
        this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this)
        this.onClickHanlder = this.onClickHanlder.bind(this)
    }

    onMouseEnterHandler(name){
        console.log('Enter')
        console.log(name)
        this.setState({
            MoreOpsMenuVisible: true
        })
    }

    onMouseLeaveHandler(name){
        console.log('Leave')
        console.log(name)
        this.setState({
            MoreOpsMenuVisible: false
        })
    }

    onClickHanlder(name){
        if (name === MoreHorizName){
            this.setState({
                FixMoreOps: !this.state.FixMoreOps
            })
        }
    }

    render() {
        const current_theme = theme.getThemeClass()

        return(
            <Fragment>
                <Sticker className={`Item ${current_theme}`}/>

                <Button className="Discret"
                        onMouseEnter={() => this.onMouseEnterHandler(MoreHorizName)}
                        onMouseLeave={() => this.onMouseLeaveHandler(MoreHorizName)}
                        onClick={() => this.onClickHanlder(MoreHorizName)}>
                    <MoreHoriz className={`Item ${current_theme}`}/>
                </Button>

                <SearchBar className={`Item ${current_theme}`} />

                <Menu visible={this.state.MoreOpsMenuVisible || this.state.FixMoreOps}
                      size="Large"
                      items={[<SwitchTheme/>]}/>
            </Fragment>
        )
    }
}

export default Options