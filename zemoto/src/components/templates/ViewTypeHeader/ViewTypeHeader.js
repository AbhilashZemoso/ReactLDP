import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Typography from "../../atoms/Typography/Typography";
import SetLocation from "../../organisms/setLocation/setLocation";
import logo from "../../../resources/images/logoBlack.webp";

const useStyles = makeStyles({
  root: {
    padding: "40px 70px",
    color: "rgb(100,100,100,.7)",
  },
  logo: {
    width: "200px",
  },
  faded:{
      color: "rgb(100,100,100,.4)",
  }
});

const ViewTypeHeader = () => {
  const classes = useStyles();

  return (
    <Grid container direction="column" className={classes.root} spacing={6}>
      <Grid item container direction="row" alignItems="center" spacing={4}>
        <Grid item>
          <img className={classes.logo} src={logo} />
        </Grid>
        <Grid item sm>
          <SetLocation shadowBorder />
        </Grid>
        <Grid item>
          <Typography mode="link" variant="h6">
            Login
          </Typography>
        </Grid>
        <Grid item>
          <Typography mode="link" variant="h6">
            Signup
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
          <Typography variant="subtitle2">
          Home / India / Hyderabad / Hyderabad City / <span className={classes.faded}>Charminar Restaurants</span>
          </Typography>
      </Grid>
    </Grid>
  );
};

export default ViewTypeHeader;
