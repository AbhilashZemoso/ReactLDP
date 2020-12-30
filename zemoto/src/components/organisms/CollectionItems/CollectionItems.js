import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import CollectionViewItem from "../../molecules/CollectionViewItem/CollectionViewItem";
import collection1 from "./../../../resources/images/collection1.jpg";
import collection2 from "./../../../resources/images/collection2.jpg";
import collection3 from "./../../../resources/images/collection3.jpg";
import collection4 from "./../../../resources/images/collection4.jpg";
import collection5 from "./../../../resources/images/collection5.jpg";
import collection6 from "./../../../resources/images/collection6.jpg";

const useStyles = makeStyles({
  root: {
    padding: "40px 20px 40px 0",
  },
});

const CollectionItems = () => {
  const classes = useStyles();

  const photoCollection = [
    collection1,
    collection2,
    collection3,
    collection4,
    collection5,
    collection6,
  ];

  return (
    <Grid container alignItems="center" className={classes.root} spacing={2}>
      {viewType.map((value, index) => {
        return (
          <Grid item sm={3} xs={12}>
            <CollectionViewItem {...value} foodImg={photoCollection[index]} id={index}></CollectionViewItem>
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
