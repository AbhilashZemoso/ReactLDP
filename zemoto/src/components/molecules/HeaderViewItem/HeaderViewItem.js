import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, CardMedia } from "@material-ui/core";
import Typography from "../../atoms/Typography/Typography";
import foodImg from "./foodItem.jpg";

const useStyles = makeStyles({
    root:{
        border: "1px solid rgb(0,0,0,.1)",
        borderRadius: "15px",
        maxWidth: "500px",
    },
  image: {
      objectFit: "cover",
      width: "100%",
      height: "300px",
      borderRadius: "15px 15px 0 0",
  },
  content:{
      padding: "8px 0 15px 0",
  }
});

const HeadeViewItem = (props) => {
  const classes = useStyles();

    //const foodImg = require('./foodItem.jpg');

  return (
    <Grid container direction="column" alignItems="center" className={classes.root}>
        <Grid item>
            <img className={classes.image} src={foodImg}/>
        </Grid>
        <Grid item  className={classes.content}>
            <Typography {...props}  variant="h6">{props.children}</Typography>
        </Grid>
    </Grid>
  );
};

export default HeadeViewItem;
