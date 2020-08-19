import React, { Component } from "react";
import * as def from './defaults';
import * as api from "../../apis/unsplash";

class View extends Component {
    state = {
        wallpaper: undefined,
    };

    constructor() {
        super();
        this.state = {
            wallpaper: def.GetDefaultWallpaper(),
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
            this.setState({ wallpaper: response });
            console.log("Wallpaper has been updated")
        }
    }

    update() {
        api.SingleRestRequest(this.onUpdate);
        //api.SingleProtoRequest(this.onUpdate);
    }

    render() {
        const img_url = this.state.wallpaper.getUrlsMap().get('small');
        const img_alt = this.state.wallpaper.getAuthor();

        return(
            <img src={img_url} alt={img_alt} />
        )
    }
}

export default View;