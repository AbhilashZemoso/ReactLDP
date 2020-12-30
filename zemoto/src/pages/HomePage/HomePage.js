import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import HomeView from "../../components/templates/HomeView/HomeView";
import Collections from "../../components/templates/Collections/Collections";
import Localities from "../../components/templates/Localities/Localities";


const HomePage = () => {

  return (
    <Grid container direction="column">
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
