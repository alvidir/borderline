import { Image } from '../proto/unsplash/api_pb';

function CopyImageUrlsMap(from, to){
    const keys = Object.keys(from);
    keys.forEach(function(value, index, array) {
        to.getUrlsMap().set(value, from[value]);
    });
}  

export function ImageAdapter(json) {
    let response = new Image();
    response.setAuthor(json['author']);
    response.setProfile(json['profile']);
    response.setProfileImage(json['profile_image']);
    response.setBio(json['bio']);
    response.setLikes(json['likes']);
    
    CopyImageUrlsMap(json['urls'], response);
    return response;
}