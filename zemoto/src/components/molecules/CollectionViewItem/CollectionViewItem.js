import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Typography from "../../atoms/Typography/Typography";
//import foodImg from "./../../../resources/images/foodItem2.jpg";
//import foodImg from "./foodImg.png";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const useStyles = makeStyles({
  root: {
    borderRadius: "15px",
    height: "500px",
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    cursor: "pointer",
  },
  small: {
    height: "250px",
  },
  content: {
    padding: "20px",
  },
  arrowIcon: {
    position: "relative",
    top: "8px",
  },
});

const CollectionViewItem = (props) => {
  const classes = useStyles();

  let rootClass = classes.root;

  if (props.mode == "small") {
    rootClass += " " + classes.small;
  }

  return (
    <Grid
      container
      alignItems="flex-end"
      className={rootClass}
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0, 0.1), rgb(0, 0, 0, .6)), url(${props.foodImg})`,
      }}
    >
      <Grid item className={classes.content}>
        <Typography {...props} variant="h6">
          {props.special}
        </Typography>
        <Typography {...props} variant="subtitle2">
          {props.placesCount} Places
          <ArrowRightIcon className={classes.arrowIcon} fontSize="small" />
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CollectionViewItem;
