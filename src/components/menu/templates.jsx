export function DefaultTheme(){
  return NewTemplate()
}

export function DarkTheme(){
  return NewTemplate('#1e1e1e', '5px', 'transparent', '#5e5e5e')
}

export function NewTemplate(backgroundColor, borderRadius, borderColor, borderColor_hover){
  return {
    root: {
      background: backgroundColor?? '#e6e6e6',
      borderRadius: borderRadius?? "5px",
      borderColor: borderColor?? 'transparent',
      '&:hover': {
        borderColor: borderColor_hover?? '#b6b6b6',
      },
    },
  }
}