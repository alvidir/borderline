import Cookies from 'universal-cookie';
const cookies = new Cookies();

const DarkModeKey = 'DarkMode';

class Preferences {
    state = {
        dark_mode: false,
    }

    constructor() {
        this.state = {
            dark_mode: cookies.get(DarkModeKey)?? false,
        }
    }

    save() {
        cookies.set(DarkModeKey, this.state.dark_mode);
    }

    setDarkMode(enabled) {
        this.setState({
            dark_mode: enabled,
        })
    }

    getDarkMode() {
        return this.state.dark_mode;
    }
}

const UserPreferences = new Preferences();
export default UserPreferences;