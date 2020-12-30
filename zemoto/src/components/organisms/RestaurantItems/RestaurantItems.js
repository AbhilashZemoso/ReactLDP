import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Restaurant from "../../molecules/Restaurant/Restaurant";
import Typography from "../../atoms/Typography/Typography";
import collection1 from "./../../../resources/images/collection1.jpg";
import collection2 from "./../../../resources/images/collection2.jpg";
import collection3 from "./../../../resources/images/collection3.jpg";
import collection4 from "./../../../resources/images/collection4.jpg";
import collection5 from "./../../../resources/images/collection5.jpg";
import collection6 from "./../../../resources/images/collection6.jpg";
import Collections from "../../templates/Collections/Collections";

const useStyles = makeStyles({
  root: {
    padding: "0 40px",
  },
  item: {
    margin: "20px 0",
  },
  subHeading: {
    color: "rgb(100,100,100,.9)",
    cursor: "pointer",
  },
  active: {
    color: "rgb(240,0,0,.7)",
    borderBottom: "3px solid rgb(240,0,0,.5)",
  },
  subHeadingBar: {
    padding: "0 0 60px 36px",
  },
  restaurantItems: {
    padding: "40px 0",
  },
  greyBackground: {
    //backgroundColor: "rgb(200,200,200,.2)",
  }
});

const viewTypeList = [
  {
    name: "Delivery",
    heading :"Delivery",
  },
  {
    name: "Dining Out",
    heading: "Dine-Out",
  },
  {
    name: "Nightlife",
    heading: "Nightlife",
  },
];

const RestaurantItems = (props) => {
  const classes = useStyles();

  const restaurants = restaurantsList;

  const [activeType,setActiveType] = useState(0);

  return (
    <Grid container direction="column" className={classes.root}>
      <Grid
        item
        direction="row"
        container
        spacing={8}
        className={classes.subHeadingBar}
      >
        {viewTypeList.map((viewTypeItem,index) => {
          let classList = classes.subHeading;
          if (index===activeType) {
            classList += " " + classes.active;
          }
          return (
            <Grid item className={classList} onClick={()=>setActiveType(index)}>
              <Typography variant="h5">{viewTypeItem.name}</Typography>
            </Grid>
          );
        })}
      </Grid>
      { activeType>0 &&
        <Grid item className={classes.greyBackground}>
            <Collections />
      </Grid>}
      <Grid item>
        <Typography variant="h4">{viewTypeList[activeType].heading} Restaurants in Hyderabad</Typography>
      </Grid>
      <Grid
        container
        direction="row"
        alignItems="stretch"
        justify="space-between"
        spacing={2}
        className={classes.restaurantItems}
      >
        {restaurants.map((value, index) => {
          return (
            <Grid item id={index} sm={4} xs={12} className={classes.item}>
              <Restaurant {...value} id={index}></Restaurant>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

const restaurantsList = [
  {
    image: collection1,
    name: "Sr Balaki Famili Dhaba",
    rating: 3.8,
    reviews: "15.2K",
    foodTypes: ["North Indian", "Chinese", "Biriyani"],
    cost: 250,
    time: 34,
    pro: 15,
    flat: 150,
  },
  {
    image: collection2,
    name: "Hotel Shadab",
    rating: 4.4,
    reviews: "10K",
    foodTypes: ["Mughali", "Hyderabadi", "Biriyani"],
    cost: 350,
    time: 24,
    pro: 15,
    flat: 150,
  },
  {
    image: collection3,
    name: "The Bhimavaram Boys",
    rating: 3.6,
    reviews: "5003",
    foodTypes: ["South Indian"],
    cost: 150,
    time: 44,
    pro: 15,
    flat: 150,
  },
  {
    image: collection4,
    name: "Shah Ghouse Hotel & Restaurant",
    rating: 4.4,
    reviews: "75.2K",
    foodTypes: ["North Indian", "Kebhab", "Biriyani"],
    cost: 300,
    time: 34,
    pro: 15,
    flat: 150,
  },
  {
    image: collection5,
    name: "Shree Golden Place",
    rating: 3.9,
    reviews: "15.6K",
    foodTypes: ["North Indian", "Chinese", "Biriyani"],
    cost: 300,
    time: 47,
    pro: 15,
    flat: 150,
  },
  {
    image: collection6,
    name: "Baba Bakery",
    rating: 4.4,
    reviews: "25.4K",
    foodTypes: ["Bakery", "North Indian"],
    cost: 100,
    time: 40,
    pro: 15,
    flat: 150,
  },
  {
    image: collection3,
    name: "Gabru Di Chaap",
    rating: 3.6,
    reviews: "192",
    foodTypes: ["North Indian", "Wraps"],
    cost: 150,
    time: 44,
    pro: 15,
    flat: 150,
  },
  {
    image: collection4,
    name: "Pista House",
    rating: 4.3,
    reviews: "1090",
    foodTypes: ["Bakery", "Italian", "Fast Food"],
    cost: 100,
    time: 35,
    pro: 15,
    flat: 150,
  },
  {
    image: collection1,
    name: "Pizza Hut",
    rating: 3.8,
    reviews: "46.2K",
    foodTypes: ["Pizza", "Fast Food"],
    cost: 250,
    time: 54,
    pro: 15,
    flat: 150,
  },
  {
    image: collection2,
    name: "Shah Ghouse Spl Shawarma",
    rating: 4.2,
    reviews: "5,938",
    foodTypes: ["Lebanese", "Bakery", "Fast Food"],
    cost: 150,
    time: 49,
    pro: 15,
    flat: 150,
  },
  {
    image: collection5,
    name: "Lazzat Restaurant",
    rating: 4.1,
    reviews: "45.6K",
    foodTypes: ["Mughlai", "Hyderabadi", "Biriyani"],
    cost: 200,
    time: 37,
    pro: 15,
    flat: 150,
  },
  {
    image: collection6,
    name: "McDonald's",
    rating: 4.1,
    reviews: "25.4K",
    foodTypes: ["Burger", "Fast Food"],
    cost: 200,
    time: 54,
    pro: 15,
    flat: 150,
  },
];

export default RestaurantItems;
