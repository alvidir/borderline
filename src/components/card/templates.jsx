export function DefaultTheme(){
    return NewTemplate()
}
  
export function NewTemplate(width, background, opacity, background_hover, opacity_hover, color){
    return {
        root: {
            maxWidth: width?? 345,
            background: background?? 'white',
            opacity: opacity?? 1,
            color: color?? '#e6e6e6',
            
            '&:hover': {
                background: background_hover?? 'white',
                opacity: opacity_hover?? 1,
            }
          },
    }
}