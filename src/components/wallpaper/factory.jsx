import * as CardTemplate from '../../commons/card/templates'
import * as CardFactory from '../../commons/card/factory'
import * as PaperTemplates from '../../commons/paper/templates'
import * as DialogFactory from '../../commons/dialog/factory'
import * as DialogTemplates from '../../commons/dialog/templates'
import * as theme from '../theme/theme'
import './styles.css'

export const ProfileKey = 'profile'
export const ShareKey = 'share'
export const LikeKey = 'like'

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

export function NewPaperStyle() {
    return PaperTemplates.NewTemplate(
        theme.onDefaultTheme()? '#e6e6e6' : '#1e1e1e',
        theme.onDefaultTheme()? '#b6b6b6' : '#090909',
        'none', 'center', '15px'
    )
}

export function NewDialogTitle() {
    const dialogStyle = DialogTemplates.NewTitleTemplate(
        theme.onDefaultTheme()?  '#1e1e1e' : '#e6e6e6',
        'transparent', '4px'

    )

    return DialogFactory.BuildCustomTitle(dialogStyle)
}