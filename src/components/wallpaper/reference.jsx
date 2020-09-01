import React, { Component } from "react"
import {Info} from '@material-ui/icons'
import Miniature, * as minKeys from './miniature'
import RowedGrid from '../../commons/grid/factory'
import * as itos from '../../commons/parse/itos'
import { Collapse, Fade, Dialog, DialogTitle } from "@material-ui/core"
import ShareItems from './share'
import './styles.css'
import '../../styles/box.css'

const DefaultTitle = 'Enjoying this picture? Learn more about the artist.'
const ShareTitle = 'Share post'

export default class Reference extends Component {
    share = {
        author: '',
        url: '',
        description: '',
    }

    state = {
        visible: false,
        sharing: false,
    }

    constructor(props) {
        super(props)
        this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this)
        this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.onClose = this.onClose.bind(this)

        this.state = {
            visible: props.visible?? false,
            sharing: false,
        }
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
                this.share.author = this.props.author
                this.share.url = this.props.postUrl
                this.share.description = this.props.description

                this.setState({
                    sharing: true,
                })
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
                    visible: false,
                    sharing: false,
                })
                break
            default:
                break
        }
    }

    render() {
        const shareItems = ShareItems(this.share)

        return(
            <div>
                <Dialog onClose={() => this.onClose(minKeys.ShareName)}
                        onClick={() => this.onClose(minKeys.ShareName)}
                        open={this.state.sharing}>
                    <DialogTitle>{`${ShareTitle} by ${this.share.author}`}</DialogTitle>
                    <RowedGrid items={shareItems} forRow='3' />
                </Dialog>
        
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
                               likes={itos.BelittleNumber(this.props.likes?? 0)}
                               profileImage={this.props.profileImage}/>
                </Collapse>
            </div>
        )
    }
}