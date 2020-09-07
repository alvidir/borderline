import Subject, * as subject from './subject'

class Session extends Subject {
    key = undefined
    session = undefined
    logged = false
    
    constructor(props) {
        super(props)
        
        this.key = subject.getCookies().get(ThemeKey)?? DefaultTheme
        this.Login()
    }

    Login = () => {
        if (!this.key) {
            this.logged = false
            return undefined
        }
    }

    Logout = () => {

    }

    Signup = () => {

    }

    
}