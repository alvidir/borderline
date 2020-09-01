export function DefaultTheme(){
    return NewTemplate()
}
  
export function NewTemplate(background, borderColor, shadow, align, padding){
    return ({
        style: {
          backgroundColor: background?? '#e6e6e6',
          border: borderColor?? '#ffffff',
          boxShadow: shadow?? 'none',
          alignItems: align?? 'center',
          padding: padding?? '0',
        },
    })
}