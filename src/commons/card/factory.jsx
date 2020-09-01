import React from "react";
import { Card } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx'
import PropTypes from "prop-types";

export function BuildCustomCard(customStyle) {
    return withStyles(customStyle)(CustomCard);
}

export function ApplyCustomStyle(target, customStyle) {
  return withStyles(customStyle)(target)
}

function CustomCard(props) {
  const { classes } = props;

  return (
    <Card variant={props.variant}
          className={clsx(classes.root, props.className)}
          onMouseEnter={props.onMouseEnter}
          onMouseLeave={props.onMouseLeave}>
      {props.children}
    </Card>
  );
}

CustomCard.propTypes = {
  classes: PropTypes.object.isRequired
};