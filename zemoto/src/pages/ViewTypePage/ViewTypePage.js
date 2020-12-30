import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import ViewTypeHeader from "../../components/templates/ViewTypeHeader/ViewTypeHeader";
import RestaurantItems from "../../components/organisms/RestaurantItems/RestaurantItems";

const useStyles = makeStyles({
  root: {},
});

const ViewTypePage = () => {
  const classes = useStyles();

  return (
    <Grid container direction="column">
      <Grid item>
        <ViewTypeHeader />
      </Grid>
      <Grid item>
        <RestaurantItems />
      </Grid>
    </Grid>
  );
};

export default ViewTypePage;
