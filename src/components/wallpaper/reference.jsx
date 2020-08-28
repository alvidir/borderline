import React, { Component } from "react"
import {Info} from '@material-ui/icons'
import Miniature from './miniature'
import './styles.css'
import '../../styles/box.css'
import { Collapse, Fade } from "@material-ui/core"

const DefaultTitle = 'Enjoying this picture? Learn more about the artist.'

export default class Reference extends Component {
    state = {
        profile_url: '',
        visible: false,
    }

    constructor(props) {
        super(props)
        this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this)
        this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this)
        this.stringifyIntegerCount = this.stringifyIntegerCount.bind(this)
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

    render() {
        return(
            <div >
                <Collapse in={this.state.visible}
                          collapsedHeight={40}
                          className="Miniature"
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
                               onClick={()=> window.open(this.state.profile_url, "_blank")}
                               url={this.props.url}
                               author={this.props.author}
                               bio={this.props.bio}
                               likes={this.likes()}/>
                </Collapse>
            </div>
        )
    }
}