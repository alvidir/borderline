export function DefaultTheme(){
  return NewTemplate()
}

export function DarkTheme(){
  return NewTemplate('relative', 'transparent', '400px', `30px`,
                     '#9e9e9e', '#9e9e9e', 'transparent', '#5e5e5e',
                     'transparent', '#e6e6e6')
}

export function NewTemplate(position, backgroundColor, width, borderRadius_hover,
                            labelColor, labelColor_focus, borderColor_unfocus,
                            borderColor_hover, borderColor_focus, inputColor){
  return {
    root: {
      position: position?? 'relative',
      background: backgroundColor?? 'transparent', // background color
      width: width?? '400px',
      
      '& label': {
        color: labelColor?? '#5e5e5e',
      },
      '& label.Mui-focused': {
        color: labelColor_focus?? '#5e5e5e', // change alt text color when focus
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: borderColor_unfocus?? 'transparent', // border color when not focused && mouse is not over
        },
        '&:hover fieldset': {
          borderColor: borderColor_hover?? '#b6b6b6', // border color when mouse is over
          borderRadius: borderRadius_hover?? `30px`,
        },
        '&.Mui-focused fieldset': {
          borderColor: borderColor_focus?? 'transparent', // border color when focused (writing)
        },
      },
    },
    input: {
      color: inputColor?? '#1e1e1e',
    },
  }
}