import { EmptyRequest } from "../proto/unsplash/api_pb";
import { ApiClient } from "../proto/unsplash/api_grpc_web_pb";
import * as adapter from './adapters';

const proto_url = process.env.REACT_APP_PROTO_URL;
const rest_url = process.env.REACT_APP_REST_URL;
const media_path = process.env.REACT_APP_SRV_MEDIA_PATH;
const client = new ApiClient(proto_url + media_path, null, null);

export function GetProtoInstance() {
    return client;
}

export function SingleRestRequest(callback) {
    fetch(rest_url)
    .then(res => res.json())
    .then(response => {
        const final  = adapter.ImageAdapter(response);
        callback(null, final);
    })
    .catch(err => {
        console.log("Got an error from response ", err);
    })
}

export function SingleProtoRequest(callback) {
    const req = new EmptyRequest();
    client.getWallpaper(req, {}, callback);
}