import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Restaurant from "../../molecules/Restaurant/Restaurant";
import useRestaurantsFilter from "../../../services/useRestaurantsFilter";

const useStyles = makeStyles({
  item: {
    margin: "20px 0",
  },
  restaurantItems: {
    padding: "40px",
  },
});

const RestaurantItems = (props) => {
  const classes = useStyles();

  const [restaurants, applyFilter] = useRestaurantsFilter();

  return (
    <Grid
      container
      direction="row"
      alignItems="stretch"
      justify="space-between"
      spacing={2}
      className={classes.restaurantItems}
    >
      <div onClick={()=>applyFilter('sort',{'category':'cost','high-to-low':true})}>sort</div>
      <div onClick={()=>applyFilter('rating',{"min":4})}>rating</div>
      <div onClick={()=>applyFilter('cost',{"min":300})}>cost</div>
      {restaurants.map((value, index) => {
        return (
          <Grid
            item
            id={index}
            md={4}
            sm={6}
            xs={12}
            key={index}
            className={classes.item}
            
          >
            <Restaurant {...value}></Restaurant>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default RestaurantItems;
