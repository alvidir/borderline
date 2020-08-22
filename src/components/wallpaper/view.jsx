import React, { Component } from "react";
import * as api from "../../apis/unsplash";
import { Image } from '../../proto/unsplash/api_pb';
import Reference from './reference';
import '../../styles/wallpaper.css'

const resolution = 'regular';
const defWallpaperUrl = process.env.REACT_APP_DEFAULT_WALLPAPER;

class View extends Component {
    state = {
        wallpaper: undefined,
    };

    constructor() {
        super();
        this.state = {
            wallpaper: new Image(),
        };
    }

    componentDidMount(){
        this.update();
    }

    onUpdate = (err, response) => {
        console.log("on update");
        if (err) {
            console.log("Got an error on updating", err);
            console.log("Response state on failed update: ", response);
        } else {
            this.setState({ wallpaper: response});
            console.log("Wallpaper has been updated")
        }
    }

    update() {
        //api.SingleRestRequest(this.onUpdate);
        api.SingleProtoRequest(this.onUpdate);
    }

    render() {
        let img_url = defWallpaperUrl; 
        if (this.state.wallpaper && this.state.wallpaper.getUrlsMap()) {
            img_url = this.state.wallpaper.getUrlsMap().get(resolution);
        }

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
                <Reference />
            </div>
        )
    }
}

export default View;