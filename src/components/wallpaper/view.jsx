import React, { Component } from "react";
import { EmptyRequest } from "../../proto/unsplash/api_pb";
import { ApiClient } from "../../proto/unsplash/api_grpc_web_pb";

const source_url = process.env.REACT_APP_SOURCE_URL;
//const media_path = process.env.REACT_APP_SRV_MEDIA_PATH;
const srv = new ApiClient(source_url /*+ media_path*/, null, null);
console.log("request on", source_url);

class View extends Component {
    state = {
        default: undefined,
        current: undefined,
    };

    constructor() {
        super();
        this.state = {
            default: process.env.REACT_APP_DEFAULT_WALLPAPER,
        };
    }

    componentDidMount(){
        this.update();
    }

    onUpdate = (err, response) => {
        console.log("on update");
        if (err) {
            console.log("Got an error on updating", err);
        } else {
            this.setState({ current: response });
            console.log("Wallpaper has been updated")
        }
    }

    update() {
        const req = new EmptyRequest();
        srv.single(req, {}, this.onUpdate);
    }

    render() {
        return(
            <img src={this.state.default} alt='default' />
        )
    }
}

export default View;