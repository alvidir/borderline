export function DefaultTheme(){
    return NewTemplate()
}
  
export function NewTemplate(colorOff, colorOn, backgroundColor_checked){
    return {
        switchBase: {
            color: colorOff?? '#303030',
            '&$checked': {
                color: colorOn?? '#e6e6e6',
            },
            '&$checked + $track': {
                backgroundColor: backgroundColor_checked?? '#e6e6e6',
            },
        },
        checked: {},
        track: {},
    }
}