import React from "react";
import { DialogTitle } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx'
import PropTypes from "prop-types";

export function BuildCustomTitle(customStyle) {
    return withStyles(customStyle)(CustomDialogTitle);
}

export function ApplyCustomStyle(target, customStyle) {
  return withStyles(customStyle)(target)
}

function CustomDialogTitle(props) {
  const { classes } = props;

  return (
    <DialogTitle className={clsx(classes.root, props.className)}>
      {props.children}
    </DialogTitle>
  );
}

CustomDialogTitle.propTypes = {
  classes: PropTypes.object.isRequired
};