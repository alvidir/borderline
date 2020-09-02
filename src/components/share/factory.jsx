import * as PaperTemplates from '../../commons/paper/templates'
import * as DialogFactory from '../../commons/dialog/factory'
import * as DialogTemplates from '../../commons/dialog/templates'
import * as theme from '../theme/theme'

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