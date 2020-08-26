import React from "react";
import { Card } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";
import './styles.css'

function WithCustomizedInputs(props) {
  const { classes } = props;

  return (
    <Card variant={props.variant}
          className={classes.root}
          onMouseEnter={props.onMouseEnter}
          onMouseLeave={props.onMouseLeave}>
      {props.children}
    </Card>
  );
}

WithCustomizedInputs.propTypes = {
  classes: PropTypes.object.isRequired
};

export function BuildCustomCard(customStyle) {
    return withStyles(customStyle)(WithCustomizedInputs);
}