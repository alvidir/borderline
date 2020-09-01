import React from "react"
import clsx from 'clsx'
import PropTypes from "prop-types"
import { withStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'

export function BuildCustomSquare(customStyle) {
  return withStyles(customStyle)(CustomButton)
}

export function ApplyCustomStyle(target, customStyle) {
  return withStyles(customStyle)(target)
}

function CustomButton(props) {
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
  
CustomButton.propTypes = {
  classes: PropTypes.object.isRequired
}