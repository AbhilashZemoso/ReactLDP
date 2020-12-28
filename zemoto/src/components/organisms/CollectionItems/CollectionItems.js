import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import CollectionViewItem from "../../molecules/CollectionViewItem/CollectionViewItem";

const useStyles = makeStyles({
  root: {
    padding: "40px 20px 40px 0",
  },
});

const CollectionItems = () => {
  const classes = useStyles();

  return (
    <Grid container alignItems="center" className={classes.root} spacing={2}>
      {viewType.map((value, index) => {
        return (
          <Grid item sm={3} xs={12}>
            <CollectionViewItem {...value} id={index}></CollectionViewItem>
          </Grid>
        );
      })}
    </Grid>
  );
};

const viewType = [
  {
    placesCount: 12,
    special: "New Year's Specials",
  },
  {
    placesCount: 31,
    special: "Trending This Week",
  },
  {
    placesCount: 111,
    special: "Hyderabad's Hottest",
  },
  {
    placesCount: 221,
    special: "Work Friendly Places!",
  },
];

export default CollectionItems;
