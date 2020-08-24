import React, { Fragment } from "react"
import Sticker from './sticker'
import { Button } from '@material-ui/core'
import { MoreHoriz } from '@material-ui/icons'
import Theme from '../theme/theme'
import Menu from '../menu/menu'
import SearchBar from './search'
import './styles.css'

const MoreHorizName = 'MoreOps'

class Options extends Theme {
    state = {
        MoreOpsMenuVisible: false
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
        console.log('Clicked')
        console.log(name)
    }

    render() {
        const theme = this.getThemeClass()

        return(
            <Fragment>
                <Sticker className={`Item ${theme}`}/>

                <Button className="Discret"
                        onMouseEnter={() => this.onMouseEnterHandler(MoreHorizName)}
                        onMouseLeave={() => this.onMouseLeaveHandler(MoreHorizName)}>
                    <MoreHoriz className={`Item ${theme}`}
                               onClick={() =>  this.onClickHanlder(MoreHorizName)}/>
                </Button>

                <SearchBar className={`Item ${theme}`} />

                <Menu visible={this.state.MoreOpsMenuVisible} />
            </Fragment>
        )
    }
}

export default Options