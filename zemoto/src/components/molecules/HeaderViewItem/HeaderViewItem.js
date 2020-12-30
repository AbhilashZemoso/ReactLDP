import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Typography from "../../atoms/Typography/Typography";

const useStyles = makeStyles({
  root: {
    border: "1px solid rgb(0,0,0,.1)",
    borderRadius: "15px",
    maxWidth: "500px",
    cursor: "pointer",
    transition: "transform .3s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  image: {
    objectFit: "cover",
    width: "100%",
    height: "300px",
    borderRadius: "15px 15px 0 0",
  },
  content: {
    padding: "8px 0 15px 0",
    color: "rgb(0,0,0,.8)",
  },
});

const HeaderViewItem = (props) => {
  const classes = useStyles();

  //const foodImg = require('./foodImg.png');

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      className={classes.root}
    >
      <Grid item>
        <img className={classes.image} src={props.foodImg} />
      </Grid>
      <Grid item className={classes.content}>
        <Typography {...props} variant="h6">
          {props.children}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default HeaderViewItem;
