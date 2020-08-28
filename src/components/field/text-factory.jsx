import React from "react";
import { TextField } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";

export function BuildCustomTextField(customStyle) {
  return withStyles(customStyle)(WithCustomizedInputs);
}

export function ApplyCustomStyle(target, customStyle) {
return withStyles(customStyle)(target)
}

function WithCustomizedInputs(props) {
  const { classes } = props;

  return (
    <TextField
      defaultValue={props.defaultValue}
      className={classes.root}
      label={props.label}
      type={props.type}
      size={props.size}
      autoComplete={props.autoComplete}
      variant={props.variant}
      onChange={props.onChange}
      InputProps={{
        className: classes.input,
      }}
    />
  );
}

WithCustomizedInputs.propTypes = {
  classes: PropTypes.object.isRequired
};