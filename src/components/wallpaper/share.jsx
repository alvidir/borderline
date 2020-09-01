import React,  { Component } from 'react'
import * as factory from './factory'
import RowedGrid from '../../commons/grid/factory'
import { Dialog, DialogContent, Button } from '@material-ui/core'
import * as theme from '../theme/theme'
import './styles.css'

import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    WhatsappShareButton,
} from "react-share";

import {
    EmailIcon,
    FacebookIcon,
    LinkedinIcon,
    RedditIcon,
    TelegramIcon,
    TumblrIcon,
    TwitterIcon,
    WhatsappIcon,
} from "react-share";

const separator = ' | '
const ShareTitle = 'Share post by\t'

export default class ShareDialog extends Component {

    constructor(props) {
        super(props)

        this.getShareItems = this.getShareItems.bind(this)
    }

    getShareItems() {
        const share = this.props.share?? {}

        return [
            ShareButton(EmailShareButton, EmailIcon, 'Email', share),
            ShareButton(FacebookShareButton, FacebookIcon, 'Facebook', share),
            ShareButton(LinkedinShareButton, LinkedinIcon, 'Linkedin', share),
            ShareButton(RedditShareButton, RedditIcon, 'Reddit', share),
            ShareButton(TelegramShareButton, TelegramIcon, 'Telegram', share),
            ShareButton(TumblrShareButton, TumblrIcon, 'Tumblr', share),
            ShareButton(TwitterShareButton, TwitterIcon, 'Twitter', share),
            ShareButton(WhatsappShareButton, WhatsappIcon, 'Whatsapp', share),
        ]
    }

    render() {
        const PaperStyle = factory.NewPaperStyle()
        const CustomTitle = factory.NewDialogTitle()

        return (
            <Dialog onClose={() => this.props.onClose(factory.ShareKey)}
                    onClick={() => this.props.onClose(factory.ShareKey)}
                    open={this.props.open}
                    PaperProps={PaperStyle}>
                <CustomTitle>
                    <div className='SharePrefix'>{ShareTitle}</div>
                    <div>{this.props.share.author}</div>
                </CustomTitle>
                <DialogContent>
                    <RowedGrid items={this.getShareItems()} forRow='3' />
                </DialogContent>
            </Dialog>
        )
    }
}

function ShareButton(Target, Icon, name, share) {
    return (
        <Button>
            <Target className={`ShareGridCard ${theme.getThemeClass()}`}
                    url={share.url}                         // url for all
                    title={share.author}                    // title for all
                    subject=''                              // mail subject
                    body=''                                 // mail body
                    quote=''                                // facebook quote
                    hashtag=''                              // facebook hastag
                    summary=''                              // summary for linkedin
                    source={process.env.REACT_APP_SOURCE}   // source for linkedin
                    tags={[]}                               // tags for tumblr
                    caption={share.description}             // caption for tumblr
                    via=''                                  // via for twitter
                    hastags={[]}                            // hastags for twitter
                    related={[]}                            // related for twitter
                    separator={separator}>
                <Icon className='ShareIcon' size={'56px'} round={true}/>
                {name}
            </Target>
        </Button>
    )
}