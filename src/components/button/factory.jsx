import { grey, purple } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import { Switch } from '@material-ui/core';

export function BuildCustomSwitch(color_off, color_on, color_bg) {
    return withStyles({
        switchBase: {
            color: color_off?? grey[50],
            '&$checked': {
                color: color_on?? purple[500],
            },
            '&$checked + $track': {
                backgroundColor: color_on?? purple[500],
            },
        },
        checked: {},
        track: {},
    })(Switch);
}