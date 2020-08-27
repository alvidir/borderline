export function DefaultTheme(){
    return NewTemplate()
}
  
export function NewTemplate(backgroundColor, backgroundColor_hover,
                            borderRadius, borderWeight, borderColor, borderColor_hover,
                            textColor, padding, margin, boxShadow, width, height){
    return {
        root: {
            background: backgroundColor?? '#009966',
            borderRadius: borderRadius?? '4px',
            border: borderWeight?? 'none',
            borderColor: borderColor?? 'transparent',
            color: textColor?? 'white',
            padding: padding?? '0px',
            margin: margin?? '0px 5px 0px 5px',
            boxShadow: boxShadow?? 'transparent',
            '&:hover': {
                background: backgroundColor_hover?? '#009966',
                borderColor: borderColor_hover?? "transparent"
            },
            width: width?? '80px',
            height: height?? '32px',
        },
    }
}

// background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
// boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',