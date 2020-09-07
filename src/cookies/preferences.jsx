import Subject, * as subject from './subject'

export const ThemeKey = 'theme'
export const LightThemeName = 'light'
export const DarkThemeName = 'dark'
export const DefaultTheme = LightThemeName

class Preferences extends Subject {
    observers = []
    theme = DefaultTheme

    constructor(props) {
        super(props)
        this.theme = subject.getCookies().get(ThemeKey)?? DefaultTheme
    }

    save() {
        subject.getCookies().set(ThemeKey, this.theme)
    }

    setTheme(theme) {
        this.theme = theme
        this.onUpdate(ThemeKey)
    }

    getTheme() {
        return this.theme
    }
}

const UserPreferences = new Preferences()
export default UserPreferences