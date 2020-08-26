import { TextField } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import { BuildCustomStyle } from './styles'
import React from "react";
import PropTypes from "prop-types";

function WithCustomizedInputs(props) {
  const { classes } = props;

  return (
    <TextField
      defaultValue={props.defaultValue}
      className={classes.root}
      label={props.label}
      type={props.type}
      size={props.size}
      margin={props.margin}
      autoComplete={props.autoComplete}
      variant={props.variant}
      onChange={props.onChange}
      InputProps={{
        className: classes.input
      }}
    />
  );
}

WithCustomizedInputs.propTypes = {
  classes: PropTypes.object.isRequired
};

export function BuildCustomTextField(customStyle) {
    return withStyles(customStyle)(WithCustomizedInputs);
}