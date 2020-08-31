import React from 'react'
import * as CardTemplate from '../card/templates'
import * as CardFactory from '../card/factory'
import * as theme from '../theme/theme'

import {
    EmailShareButton,
    FacebookShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton
  } from "react-share";

  import {
    EmailIcon,
    FacebookIcon,
    FacebookMessengerIcon,
    InstapaperIcon,
    LineIcon,
    LinkedinIcon,
    LivejournalIcon,
    MailruIcon,
    OKIcon,
    PinterestIcon,
    PocketIcon,
    RedditIcon,
    TelegramIcon,
    TumblrIcon,
    TwitterIcon,
    ViberIcon,
    VKIcon,
    WeiboIcon,
    WhatsappIcon,
    WorkplaceIcon
  } from "react-share";

export function GetMetadata(target, keys) {
    let current = target
    for(let index = 0; current && index < keys.length; index++){
        current = current[keys[index]]
    }

    if (!current) {
        current = ''
    }

    return current
}

export function NewMiniatureCard() {
    const CustomStyle = CardTemplate.NewTemplate(
        400,
        theme.onDefaultTheme()? '#e6e6e6' : '#1e1e1e',
        1,
        theme.onDefaultTheme()? '#e6e6e6' : '#1e1e1e',
        1,
        theme.onDefaultTheme()? '#1e1e1e' : '#e6e6e6',
        theme.onDefaultTheme()? '#b6b6b6' : 'black',
        )
    return CardFactory.BuildCustomCard(CustomStyle)
}

export function getShareItems(props) {
    return [
        ShareEmailButton(props?? ''),
        ShareFacebookButton(props?? ''),
        ShareRedditButton(props?? ''),
        ShareTwitterButton(props?? ''),
        ShareWhatsappButton(props?? ''),
    ]
}

const separator = ' | '

function ShareEmailButton(props) {
    return (
        <EmailShareButton
            url={props.url}
            children={props.children}

            subject=""
            body=""
            separator={separator}>
            Email
        </EmailShareButton>
    )
}

function ShareFacebookButton(props) {
    return (
        <FacebookShareButton url={props.url}
                             title={props.author}
                             separator={separator}>
            Facebook
        </FacebookShareButton>
    )
}

function ShareRedditButton(props) {
    return (
        <RedditShareButton url={props.url}
                           title={props.author}
                           separator={separator}>
            Reddit
        </RedditShareButton>
    )
}

function ShareTwitterButton(props) {
    return (
        <TwitterShareButton url={props.url}
                            title={props.author}
                            separator={separator}
                            via=""
                            hashtags={[]}
                            related={[]}>
            Twitter
        </TwitterShareButton>
    )
}

function ShareWhatsappButton(props) {
    return (
        <WhatsappShareButton url={props.url}
                             title={props.author}
                             separator={separator}>
            Whatsapp
        </WhatsappShareButton>
    )
}