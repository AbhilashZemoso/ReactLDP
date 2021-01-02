import React from "react";
import { Grid } from "@material-ui/core";
import ViewTypeHeader from "../../components/templates/ViewTypeHeader/ViewTypeHeader";
import RestaurantItems from "../../components/organisms/RestaurantItems/RestaurantItems";
import MainCollection from "../../components/templates/MainCollection/MainCollection";
import MoreCollectionView from "../../components/templates/MoreCollectionsView/MoreCollectionView";

import { withAuthenticationRequired } from '@auth0/auth0-react';

const CollectionsPage = (props) => {

  return (
    <Grid container direction="column">
      <Grid item>
        <ViewTypeHeader />
      </Grid>
      <Grid item>
        <MainCollection {...props}/>
      </Grid>
      <Grid item>
          <RestaurantItems />
      </Grid>
      <Grid item>
        <MoreCollectionView />
      </Grid>
    </Grid>
  );
};

export default withAuthenticationRequired(CollectionsPage, {
  // Show a message while the user waits to be redirected to the login page.
  onRedirecting: () => (<div>Redirecting you to the login page...</div>)
});

//export default CollectionsPage;
