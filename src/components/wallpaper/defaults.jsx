import { Image } from '../../proto/unsplash/api_pb';

export function GetDefaultWallpaper() {
    let wallpaper = new Image();

    wallpaper.setAuthor(process.env.REACT_APP_DEFAULT_AUTHOR);
    wallpaper.setProfile(process.env.REACT_APP_DEFAULT_PROFILE);
    wallpaper.setProfileImage(process.env.REACT_APP_DEFAULT_PROFILE_URL);
    wallpaper.setLikes('+500');

    wallpaper.getUrlsMap().set('full', process.env.REACT_APP_DEFAULT_WALLPAPER);
    return wallpaper;
}