import React from "react"
import clsx from 'clsx'
import PropTypes from "prop-types"
import { withStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'

export function BuildCustomSquare(customStyle) {
  return withStyles(customStyle)(WithCustomizedInputs)
}

export function ApplyCustomStyle(target, customStyle) {
  return withStyles(customStyle)(target)
}

function WithCustomizedInputs(props) {
    const { classes } = props
  
    return (
      <Button className={clsx(classes.root, props.className)}
              size={props.size}
              variant={props.variant}
              onClick={props.onClick}
              name={props.name} >
        {props.children}
      </Button>
    )
}
  
WithCustomizedInputs.propTypes = {
  classes: PropTypes.object.isRequired
}