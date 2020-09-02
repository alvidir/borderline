import React from "react"
import Theme from '../theme/theme' 
import { Info } from '@material-ui/icons'
import Miniature from './miniature'
import * as itos from '../../commons/parse/itos'
import ShareDialog from '../share/share'
import { Collapse, Fade } from "@material-ui/core"
import * as factory from './factory'
import './styles.css'
import '../../styles/box.css'

const DefaultTitle = 'Enjoying this picture? Learn more about the artist.'

export default class Reference extends Theme {
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
        this.hide = this.hide.bind(this)

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
            case factory.ProfileKey:
                window.open(this.state.profile_url, "_blank")
                break
            
            case factory.ShareKey:
                this.share.author = this.props.author
                this.share.url = this.props.postUrl
                this.share.description = this.props.description

                this.setState({
                    sharing: true,
                })
                break

            case factory.LikeKey:
                break
            default:
                break
        }
    }

    hide() {
        this.setState({
            visible: false,
            sharing: false,
        })
    }

    render() {
        return(
            <div>
                <ShareDialog open={this.state.sharing}
                             share={this.share}
                             onClose={this.hide}/>
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

                    <Miniature onClick={this.handleClick}
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