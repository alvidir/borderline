import { TextField } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

export function BuildCustomTextField(title_color, border_unsel_color, border_sel_color) {
    return withStyles({
        root: {
          '& label.Mui-focused': {
            color: title_color,
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: border_unsel_color,
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: border_unsel_color,
            },
            '&:hover fieldset': {
              borderColor: border_unsel_color,
            },
            '&.Mui-focused fieldset': {
              borderColor: border_sel_color,
            },
          },
        },
      })(TextField);
}