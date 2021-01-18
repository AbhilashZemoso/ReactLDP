import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";
import Typography from "../../atoms/Typography/Typography";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Rating from "@material-ui/lab/Rating";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";


const useStyles = makeStyles({
  root: {
    maxWidth: "565px",
    position: "relative",
  },
  pro:{
    position: "absolute",
    color: "blue",
    height: "25px",
    width : "50px",
    top: "-5px",
    zIndex:"2px",
  },
  flat:{

  },
  image: {
    width: "100%",
    height: "350px",
    objectFit: "cover",
    borderRadius: "20px",
  },
  heading: {
    fontWeight: "500",
    color: "red",
  },
  rating: {
    padding: "0 8px",
  },
  reviews:{
    color: "rgb(100,100,100,.6)",
  },
  foodTypes:{
    color: "rgb(100,100,100,.9)",
  },
  dot:{
    color: "rgb(100,100,100,.5)",
    fontSize: "10px",
    padding: "4px 10px",
  },
  costAndTime :{
    color: "rgb(100,100,100,.7)",
  },
});

const Restaurant = (props) => {
  const classes = useStyles();

    const foodTypes = props.foodTypes.join(', ');

  return (
    <Grid
      container
      direction="column"
      alignItems="flex-start"
      className={classes.root}
    >
      <Grid item>
        <img alt="restaurant pic" className={classes.image} src={props.image} />
        <div className={classes.pro} />
        <div className={classes.flat} />
      </Grid>
      <Grid item className={classes.content}>
        <Typography className={classes.heading} variant="h6">{props.name}</Typography>
      </Grid>
      <Grid item container direction="row" alignItems="center">
        <Rating
          name="customized-empty"
          defaultValue={props.rating}
          precision={0.1}
          size="small"
          emptyIcon={<StarBorderIcon fontSize="inherit" />}
        />
        <Box className={classes.rating}>
        <Typography >{props.rating}</Typography>
        </Box>
        <Box className={classes.reviews}>
        <Typography>({props.reviews} Delivery Reviews)</Typography>
        </Box>
      </Grid>
      <Grid item className={classes.foodTypes}>
        <Typography >{foodTypes}</Typography>
      </Grid>
      <Grid item className={classes.costAndTime}>
        <Typography >
          ₹{props.cost} per person
          <FiberManualRecordIcon className={classes.dot} />{props.time} min
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Restaurant;
