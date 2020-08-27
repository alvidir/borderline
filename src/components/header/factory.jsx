import * as SquareButtonFactory from '../button/square/factory'
import * as SquareButtonTemplate from '../button/square/templates'
import * as theme from '../theme/theme'
import * as Pref from '../../cookies/preferences'

export function NewLoginButton() {
    const onDefaultMode = theme.getTheme() === Pref.DefaultTheme
    const template = SquareButtonTemplate.NewTemplate(
        'transparent', 'transparent',
        'undefined', 'small',
        onDefaultMode? '#1e1e1e': '#e6e6e6',
        onDefaultMode? '#1e1e1e': '#e6e6e6',
        onDefaultMode? '#1e1e1e': '#e6e6e6',
        undefined, undefined, undefined
    )
    
    return SquareButtonFactory.BuildCustomSquare(template)
}

export function NewSignupButton() {
    const template = SquareButtonTemplate.DefaultTheme()
    return SquareButtonFactory.BuildCustomSquare(template)
} 