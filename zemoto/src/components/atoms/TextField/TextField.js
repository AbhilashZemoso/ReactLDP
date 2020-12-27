import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {},
});

const TextFieldComponent = (props) => {
  const classes = useStyles();

  const classList = [classes.root];

  const className = classList.join(" ");

  return (
    <TextField
      fullWidth
      InputProps={{ disableUnderline: true }}
      className={className}
      {...props}
      variant="standard"
    />
  );
};

export default TextFieldComponent;
