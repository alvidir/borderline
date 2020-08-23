import Cookies from 'universal-cookie';
const cookies = new Cookies();

export const ThemeKey = 'theme';
export const LightThemeName = 'light';
export const DarkThemeName = 'dark';
export const DefaultTheme = LightThemeName;

class Preferences {
    observers = [];
    theme = LightThemeName;

    constructor() {
        this.state = {
            dark_mode: cookies.get(ThemeKey)?? false,
        }
    }

    onUpdate(name) {
        this.observers.forEach(obj => {
            obj.onPreferencesUpdate(name);
        })
    }

    save() {
        cookies.set(ThemeKey, this.theme);
    }

    attach(obj) {
        this.observers.push(obj);
    }

    setTheme(theme) {
        this.theme = theme;
        this.onUpdate(ThemeKey);
    }

    getTheme() {
        return this.theme;
    }
}

const UserPreferences = new Preferences();
export default UserPreferences;