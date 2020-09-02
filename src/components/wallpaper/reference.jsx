import React from "react"
import Theme, * as theme from '../theme/theme' 
import { Info } from '@material-ui/icons'
import Miniature from './miniature'
import * as itos from '../../commons/parse/itos'
import ShareDialog from '../share/share'
import { Collapse, Fade } from "@material-ui/core"
import * as factory from './factory'
import './styles.css'
import '../../styles/box.css'

const ShortTitle = 'Enjoying this picture?'
const LongTitle = `${ShortTitle} Learn more about the artist.`
const TransitionTime = parseInt(process.env.REACT_APP_TRANSITION_TIME)?? 500 // in ms

export default class Reference extends Theme {
    share = {
        author: '',
        url: '',
        description: '',
    }

    state = {
        visible: false,
        variant: undefined,
        sharing: false,
    }

    constructor(props) {
        super(props)
        this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this)
        this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.getIconStyle = this.getIconStyle.bind(this)
        this.hide = this.hide.bind(this)

        this.state = {
            visible: props.visible?? false,
            variant: undefined,
            sharing: false,
        }
    }

    componentDidUpdate() {
        if (this.props.hidden &&
            !this.state.visible &&
            !this.state.variant){

            setTimeout(() => this.setState({
                variant: this.state.visible? undefined : 'Minimized'
            }), TransitionTime)

        } else if (!this.props.hidden &&
                   this.state.variant) {
            this.setState({
                variant: undefined
            })
        }
    }

    onMouseEnterHandler() {
        this.setState({
            visible: true,
            variant: undefined,
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
                window.open(this.props.profileUrl, "_blank")
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

    getIconStyle () {
        return {
            color: theme.onDefaultTheme() || !this.props.hidden? '#e6e6e6' : '#5e5e5e' 
        }
    }

    render() {
        return(
            <div>
                <ShareDialog open={this.state.sharing}
                             share={this.share}
                             onClick={this.hide}/>
                <Collapse in={this.state.visible}
                          collapsedHeight={40}
                          className={`Miniature ${this.state.variant}`}
                          onMouseEnter={this.onMouseEnterHandler}
                          onMouseLeave={this.onMouseLeaveHandler}>
                    <Fade in={!this.state.visible}>
                        <div className="Reference">
                            <Info className="SmallIcon Collapsed"
                                  style={this.getIconStyle()} />
                            <label className="AltTitle Collapsed">
                                {this.props.hidden? undefined : LongTitle }
                            </label>
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