import * as PaperFactory from '../../commons/paper/factory'
import * as PaperTemplates from '../../commons/paper/templates'

export function LoginPaper() {
    const template = PaperTemplates.DefaultTheme() 
    return PaperFactory.BuildCustomPaper(template)
}