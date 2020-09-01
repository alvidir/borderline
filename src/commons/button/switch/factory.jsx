import React from "react"
import clsx from 'clsx'
import PropTypes from "prop-types"
import { withStyles } from '@material-ui/core/styles'
import { Switch } from '@material-ui/core'

export function BuildCustomSwitch(customStyle) {
  return withStyles(customStyle)(Switch)
}

export function ApplyCustomStyle(target, customStyle) {
  return withStyles(customStyle)(target)
}

function CustomSwitch(props) {
    const { classes } = props
  
    return (
      <Switch
            className={clsx(classes.root, props.className)}
            onChange={props.onChange}
            checked={props.checked}
            name={props.name} />
    )
}
  
CustomSwitch.propTypes = {
  classes: PropTypes.object.isRequired
}