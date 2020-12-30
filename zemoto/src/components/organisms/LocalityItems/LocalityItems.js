import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import LocalityViewItem from "../../molecules/LocalityViewItem/LocalityViewItem";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    padding: "40px",
  },
});

const LocalityItems = () => {
  const classes = useStyles();

  return (
    <Grid container alignItems="center" className={classes.root} spacing={2}>
      {viewType.map((value, index) => {
        return (
          <Grid item sm={4} xs={12}>
            <Link to="/viewType/delivery" style={{ textDecoration: "none" }}>
              <LocalityViewItem {...value} id={index}></LocalityViewItem>
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
};

const viewType = [
  {
    placesCount: 363,
    placeName: "Jubilee Hills",
  },
  {
    placesCount: 84,
    placeName: "Gachibowli",
  },
  {
    placesCount: 264,
    placeName: "Hitech City",
  },
  {
    placesCount: 93,
    placeName: "Madhapur",
  },
  {
    placesCount: 1153,
    placeName: "Kukatpally",
  },
  {
    placesCount: 166,
    placeName: "Begumpet",
  },
  {
    placesCount: 261,
    placeName: "Tolichowki",
  },
  {
    placesCount: 231,
    placeName: "Ameerpet",
  },
  {
    placesCount: 87,
    placeName: "Film Nagar",
  },
  {
    placesCount: 122,
    placeName: "Paradise Circle",
  },
  {
    placesCount: 48,
    placeName: "Necklace Road",
  },
  {
    placesCount: 363,
    placeName: "Jubilee Hills",
  },
  {
    placesCount: 84,
    placeName: "Gachibowli",
  },
  {
    placesCount: 264,
    placeName: "Hitech City",
  },
  {
    placesCount: 93,
    placeName: "Madhapur",
  },
  {
    placesCount: 1153,
    placeName: "Kukatpally",
  },
  {
    placesCount: 166,
    placeName: "Begumpet",
  },
  {
    placesCount: 261,
    placeName: "Tolichowki",
  },
];

export default LocalityItems;
