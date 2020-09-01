export function DefaultTitleTheme(){
    return NewTitleTemplate()
}
  
export function NewTitleTemplate(color, background, margin){
    return {
        root: {
            color: color?? '#1e1e1e',
            background: background?? 'transparent',
            margin: margin?? 0,
        },
    }
}