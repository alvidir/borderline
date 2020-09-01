import * as TextFieldFactory from '../../commons/field/text/factory'
import * as TextFieldTemplates from '../../commons/field/text/templates'


export function DefaultTheme(){
  const template = TextFieldTemplates.DefaultTheme()
  return TextFieldFactory.BuildCustomTextField(template)
}

export function DarkTheme(){
  const template = TextFieldTemplates.NewTemplate('relative', 'transparent', '400px', `30px`,
                                                  '#9e9e9e', '#9e9e9e', 'transparent', '#5e5e5e',
                                                  'transparent', '#e6e6e6')
  
  return TextFieldFactory.BuildCustomTextField(template)
}