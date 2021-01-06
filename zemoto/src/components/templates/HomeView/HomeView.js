import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import bgPhoto from "../../../resources/images/headerBg.jpg";
import logo from "../../../resources/images/logo.webp";
import SetLocation from "../../organisms/setLocation/setLocation";
import ViewTypeItem from "../../organisms/ViewTypeItems/ViewTypeItem";
import { Link } from "react-router-dom";
import Typography from "../../atoms/Typography/Typography";
import auth from "../../../auth/initAuth";

const useStyles = makeStyles({
  root: {
    backgroundImage: `linear-gradient(rgba(0,0,0, 0.5), rgb(0, 0, 0, .5)), url(${bgPhoto})`,
    height: "800px",
    //width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
  },
  logo: {
    width: "25vw",
    minWidth: "250px",
  },
  topPart: {
    padding: "40px 80px 0 80px",
  },
  pointer: {
    cursor: "pointer",
  },
  search: {
    minWidth: "70vw",
    maxWidth: "95vw",
  },
});

const SignupView = () => {
  return (
    <React.Fragment>
      <Grid item>
        <Typography mode="link" variant="h6">
          <Link
            to="/login"
            style={{ textDecoration: "inherit", color: "inherit" }}
          >
            Log in
          </Link>
        </Typography>
      </Grid>

      <Grid item>
        <Typography mode="link" variant="h6">
          <Link
            to="/signup"
            style={{ textDecoration: "inherit", color: "inherit" }}
          >
            Sign up
          </Link>
        </Typography>
      </Grid>
    </React.Fragment>
  );
};
const logout = () => {
  auth.logout();
  window.location.reload();
};

const LogoutView = () => {
  return (
    <Grid item onClick={logout}>
      <Typography mode="link" variant="h6">
        Logout
      </Typography>
    </Grid>
  );
};

const HomeView = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={7}>
      <Grid item container direction="column" className={classes.root}>
        <Grid item container spacing={7} className={classes.topPart}>
          <Grid item sm>
            <Typography mode="link" variant="subtitle2">
              Get the App
            </Typography>
          </Grid>
          {auth.loggedIn() ? LogoutView() : SignupView()}
        </Grid>
        <Grid item sm={2}></Grid>
        <Grid
          item
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={5}
        >
          <Grid item>
            <img alt="logo" className={classes.logo} src={logo} />
          </Grid>
          <Grid
            item
            container
            alignItems="baseline"
            justify="center"
            spacing={2}
          >
            <Grid item>
              <Typography variant="h4">
                Discover the best food &#38; drinks in
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">Hyderabad</Typography>
            </Grid>
          </Grid>
          <Grid item sm={12} className={classes.search}>
            <SetLocation />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <ViewTypeItem />
      </Grid>
    </Grid>
  );
};

export default HomeView;
