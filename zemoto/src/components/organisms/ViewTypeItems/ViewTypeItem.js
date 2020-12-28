import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import HeaderViewItem from "../../molecules/HeaderViewItem/HeaderViewItem";

const useStyles = makeStyles({
  root: {
      padding: "40px 40px 80px 40px",
  },
});

const ViewTypeItem = () => {
  const classes = useStyles();

  return (
    <Grid container alignItems="center" className={classes.root} spacing={2}>
      {viewType.map((value,index) => {
          return (<Grid item sm={3} xs={12}>
            <HeaderViewItem id={index}>{value}</HeaderViewItem>
          </Grid>);
      })}
    </Grid>
  );
};

const viewType = [
  'Order Food Online',
  'Go out for a meal',
  'Nightlife & Clubs',
  'Zomato Pro'
];

export default ViewTypeItem;
