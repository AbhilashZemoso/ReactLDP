import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
  root: {
  },
});

const TypographyComponent = (props) => {
  const classes = useStyles();

  const classList = [classes.root];

  const className = classList.join(" ");

  return (
    <Typography className={className} variant={props.variant}>
      {props.children}
    </Typography>
  );
};

export default TypographyComponent;
