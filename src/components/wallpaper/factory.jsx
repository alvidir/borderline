import * as CardTemplate from '../../commons/card/templates'
import * as CardFactory from '../../commons/card/factory'
import * as theme from '../theme/theme'
import './styles.css'

export function NewCustomLayer(url){
    return {
        backgroundImage: 'url(' + url + ')',
        backgroundSize: 'cover',
        overflow: 'hidden',
    }
}

export function NewMiniatureCard() {
    const CustomStyle = CardTemplate.NewTemplate(
        400,
        theme.onDefaultTheme()? '#e6e6e6' : '#1e1e1e',
        1,
        theme.onDefaultTheme()? '#e6e6e6' : '#1e1e1e',
        1,
        theme.onDefaultTheme()? '#1e1e1e' : '#e6e6e6',
        theme.onDefaultTheme()? '#b6b6b6' : 'black',
        )
    return CardFactory.BuildCustomCard(CustomStyle)
}