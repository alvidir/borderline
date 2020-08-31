import React, { Component } from "react"
import {Info} from '@material-ui/icons'
import Miniature, * as minKeys from './miniature'
import ListDialog from '../dialog/list'
import './styles.css'
import '../../styles/box.css'
import { Collapse, Fade } from "@material-ui/core"
import * as factory from './factory'

const DefaultTitle = 'Enjoying this picture? Learn more about the artist.'

export default class Reference extends Component {
    state = {
        visible: false,
        shareOpen: false,
    }

    constructor(props) {
        super(props)
        this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this)
        this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this)
        this.stringifyIntegerCount = this.stringifyIntegerCount.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.onClose = this.onClose.bind(this)
        this.likes = this.likes.bind(this)

        this.state = {
            visible: props.visible?? false,
        }
    }

    stringifyIntegerCount(value){
        if (value < 1e3 ){
            return value
        } else if (value < 1e6) {
            return (value/1e3) + 'K'
        } else if (value < 1e9){
            return (value/1e6) + 'M'
        } else {
            return (value/1e9) + 'G'
        }
    }

    likes() {
        let likes = this.props.likes?? 0
        if (typeof likes === 'string'){
            likes = parseInt(likes, 10 );
        }

        return this.stringifyIntegerCount(likes)
    }

    componentWillReceiveProps(props) {
        this.setState({ profile_url: props.profileUrl })  
    }

    onMouseEnterHandler() {
        this.setState({
            visible: true,
        })
    }

    onMouseLeaveHandler() {
        this.setState({
            visible: false,
        })
    }

    handleClick(name) {
        switch (name) {
            case minKeys.ProfileName:
                window.open(this.state.profile_url, "_blank")
                break
            
            case minKeys.ShareName:
                this.setState({ shareOpen: true })
                break

            case minKeys.LikeName:
                break
            default:
                break
        }
    }

    onClose(name) {
        switch (name) {            
            case minKeys.ShareName:
                this.setState({
                    shareOpen: false,
                    visible: false,
                })
                break
            default:
                break
        }
    }

    render() {
        const shareItems = factory.getShareItems(this.props)

        return(
            <div>
                <ListDialog open={this.state.shareOpen}
                            onClose={this.onClose}
                            items={shareItems}/>
                <Collapse in={this.state.visible}
                          collapsedHeight={40}
                          className='Miniature'
                          onMouseEnter={this.onMouseEnterHandler}
                          onMouseLeave={this.onMouseLeaveHandler}>
                    <Fade in={!this.state.visible}>
                        <div className="Reference">
                            <Info className="SmallIcon Collapsed SmallIcon"
                                  style={{ color: 'white' }} />
                            <label className="AltTitle Collapsed AltTitle">{DefaultTitle}</label>
                        </div>
                    </Fade>
                    <Miniature className="Bottom"
                               onClick={this.handleClick}
                               url={this.props.url}
                               author={this.props.author}
                               bio={this.props.bio}
                               likes={this.likes()}
                               profileImage={this.props.profileImage}/>
                </Collapse>
            </div>
        )
    }
}