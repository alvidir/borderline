export function LightTheme(){
    return {
      root: {
        position: 'relative',
        '& label.Mui-focused': {
          color:'#5e5e5e', // change alt text color when focus
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: 'transparent', // border bottom: unknown
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'transparent', // border color when not focused && mouse is not over
          },
          '&:hover fieldset': {
            borderColor: '#b6b6b6', // border color when mouse is over
          },
          '&.Mui-focused fieldset': {
            borderColor: 'transparent', // border color when focused (writing)
          },
        },
        background: 'transparent', // background color
        width: '400px',
      },
      input: {
        color: '#1e1e1e',
      },
    }
}

export function DarkTheme(){
  return {
    root: {
      position: 'relative',
      '& label.Mui-focused': {
        color:'#5e5e5e', // change alt text color when focus
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'transparent', // border bottom: unknown
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'transparent', // border color when not focused && mouse is not over
        },
        '&:hover fieldset': {
          borderColor: '#b6b6b6', // border color when mouse is over
        },
        '&.Mui-focused fieldset': {
          borderColor: 'transparent', // border color when focused (writing)
        },
      },
      background: 'transparent', // background color
      width: '400px',
    },
    input: {
      color: '#e6e6e6',
    },
  }
}