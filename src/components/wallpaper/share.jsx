import React from 'react'

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

export default function ShareItems(share) {
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

function ShareButton(Target, Icon, name, share) {
    return (
        <Target className="ShareGridCard"
                url={share.url}                         // url for all
                children={share.children}               // children for all
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
            
                <Icon size={'72px'} round={true}/>
                <label>{name}</label>
            
        </Target>
    )
}