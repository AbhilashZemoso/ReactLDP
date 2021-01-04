import React from "react";
import { Grid } from "@material-ui/core";
import HomeView from "../../components/templates/HomeView/HomeView";
import Collections from "../../components/templates/Collections/Collections";
import Localities from "../../components/templates/Localities/Localities";
import Login from "../../components/Login";
import SignUp from "../../components/SignUp";


const HomePage = () => {

  return (
    <Grid container direction="column">
      <Grid item>
        <Login />
      </Grid>
      <Grid item>
        <SignUp />
      </Grid>
      <Grid item>
        <HomeView />
      </Grid>
      <Grid item>
        <Collections />
      </Grid>
      <Grid item>
          <Localities />
      </Grid>
    </Grid>
  );
};

export default HomePage;
