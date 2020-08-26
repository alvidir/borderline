import React from "react"
import PropTypes from "prop-types"
import { withStyles } from '@material-ui/core/styles'
import { Switch } from '@material-ui/core'

function WithCustomizedInputs(props) {
    const { classes } = props
  
    return (
      <Switch
            className={classes}
            onChange={props.onChange}
            checked={props.checked}
            name={props.name} />
    )
}
  
WithCustomizedInputs.propTypes = {
  classes: PropTypes.object.isRequired
}
  
export function BuildCustomSwitch(customStyle) {
    return withStyles(customStyle)(Switch)
}