import React, { Fragment } from "react"
import Sticker from './sticker'
import { Button } from '@material-ui/core'
import { MoreHoriz } from '@material-ui/icons'
import Theme, * as theme from '../theme/theme'
import Menu from '../menu/menu'
import { WithCustomTheme } from '../menu/items/custom'
import SearchBar from '../search/search'
import './styles.css'

const MoreHorizName = 'MoreOps'

export default class Options extends Theme {
    state = {
        MoreOpsMenuVisible: false,
        FixMoreOps: false,
    }

    constructor(props) {
        super(props)
        this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this)
        this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this)
        this.onClickHanlder = this.onClickHanlder.bind(this)
        this.renderMenuItems = this.renderMenuItems.bind(this)
    }

    onMouseEnterHandler(name){
        this.setState({
            MoreOpsMenuVisible: true
        })
    }

    onMouseLeaveHandler(name){
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

    renderMenuItems() {
        let array = WithCustomTheme([])
        //array = WithCustomTheme(array)
        return array
    }

    render() {
        const currentTheme = theme.getThemeClass()
        const menuItems = this.renderMenuItems()

        return(
            <Fragment>
                <Sticker className={`Item ${currentTheme}`}/>

                <Button className="Discret"
                        onMouseEnter={() => this.onMouseEnterHandler(MoreHorizName)}
                        onMouseLeave={() => this.onMouseLeaveHandler(MoreHorizName)}
                        onClick={() => this.onClickHanlder(MoreHorizName)}>
                    <MoreHoriz className={`Item ${currentTheme}`}/>
                </Button>

                <SearchBar className={`Item ${currentTheme}`} />

                <Menu visible={this.state.MoreOpsMenuVisible || this.state.FixMoreOps}
                      size="Large"
                      items={menuItems}/>
            </Fragment>
        )
    }
}