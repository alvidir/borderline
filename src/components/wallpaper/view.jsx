import React, { Component } from "react"
import * as api from "../../apis/unsplash"
import { Image } from '../../proto/unsplash/api_pb'
import Reference from './reference'
import './styles.css'

const resolution = 'regular'

class View extends Component {
    state = {
        wallpaper: new Image(),
    }

    componentDidMount(){
        this.update()
    }

    onUpdate = async (err, response) => {
        if (err) {
            console.log("Got an error on updating wallpaper", err)
        } else {
            this.setState({ wallpaper: response})
        }
    }

    update() {
        //api.SingleRestRequest(this.onUpdate)
        api.SingleProtoRequest(this.onUpdate)
    }

    render() {
        const img_url = this.state.wallpaper.getUrlsMap().get(resolution)
        const profile_url = this.state.wallpaper.getProfile()

        const CustomStyle = {
            backgroundImage: 'url(' + img_url + ')',
            backgroundSize: 'cover',
            overflow: 'hidden',
        }

        return(
            <div style={CustomStyle} className="Wallpaper">
                <div className="Body UnderHeader OverFooter">
                {this.props.children}
                </div>
                <Reference profileUrl={profile_url}/>
            </div>
        )
    }
}

export default View