import * as CardTemplate from '../card/templates'
import * as CardFactory from '../card/factory'
import * as theme from '../theme/theme'

export function NewMiniatureCard() {
    const CustomStyle = CardTemplate.NewTemplate(
        400,
        theme.onDefaultTheme()? '#e6e6e6' : '#1e1e1e',
        1,
        theme.onDefaultTheme()? '#e6e6e6' : '#1e1e1e',
        1,
        theme.onDefaultTheme()? '#1e1e1e' : '#e6e6e6',
        )
    return CardFactory.BuildCustomCard(CustomStyle)
}

export function NewFavoriteIcon() {
    
}