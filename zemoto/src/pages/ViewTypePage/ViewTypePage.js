import React from "react";
import { Grid } from "@material-ui/core";
import ViewTypeHeader from "../../components/templates/ViewTypeHeader/ViewTypeHeader";
import RestaurantItems from "../../components/organisms/RestaurantItems/RestaurantItems";
import ViewTypeHeadings from "../../components/organisms/ViewTypeHeadings/ViewTypeHeadings";

import { withAuthenticationRequired } from '@auth0/auth0-react';

const ViewTypePage = (props) => {

  return (
    <Grid container direction="column">
      <Grid item>
        <ViewTypeHeader />
      </Grid>
      <Grid item>
        <ViewTypeHeadings {...props}/>
      </Grid>
      <Grid item>
        <RestaurantItems />
      </Grid>
    </Grid>
  );
};

export default withAuthenticationRequired(ViewTypePage, {
  // Show a message while the user waits to be redirected to the login page.
  onRedirecting: () => (<div>Redirecting you to the login page...</div>)
});


//export default ViewTypePage;
