import React from "react";
import { Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx'
import PropTypes from "prop-types";

export function BuildCustomPaper(customStyle) {
    return withStyles(customStyle)(CustomPaper);
}

export function ApplyCustomStyle(target, customStyle) {
  return withStyles(customStyle)(target)
}

function CustomPaper(props) {
  const { classes } = props;

  return (
    <Paper variant={props.variant}
           elevation={props.elevation}
           className={props.className}
           style={clsx(classes.style)}>
      {props.children}
    </Paper>
  );
}

CustomPaper.propTypes = {
  classes: PropTypes.object.isRequired
};