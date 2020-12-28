import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import RoomRoundedIcon from "@material-ui/icons/LocationOn";
import TextField from "../../atoms/TextField/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
  root: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    minWidth:"1200px",
  },
  icon:{
    fontSize:"25px",
    paddingRight: "12px",
    color: "rgb(255,0,0,.4)",
  },
  locationInput: {
    width:"250px",
  },
  line: {
    height: "30px",
    width:"2px",
    backgroundColor: "rgb(0,0,0,.1)",
    margin: "0 16px 0 10px"
  },
  searchIcon: {
    opacity: ".4",
    fontSize: "30px",
    color: "black",
  }
});

const SetLocation = () => {
  const classes = useStyles();

  return (
    <Grid container alignItems="center" className={classes.root}>
      <Grid item>
        <RoomRoundedIcon className={classes.icon}/>
      </Grid>
      <Grid item className={classes.locationInput}>
        <Autocomplete
          options={places}
          fullWidth
          renderInput={(params) => (
            <TextField
              {...params}
              InputProps={{ ...params.InputProps, disableUnderline: true }}
              placeholder="Hyderabad"
            />
          )}
        />
      </Grid>
      <Grid item>
        <div className={classes.line}></div>
      </Grid>
      <Grid item sm>
        <TextField size="small" placeholder="Search for restaurant, cuisine or a dish"/>
      </Grid>
      <Grid item>
        <SearchIcon className={classes.searchIcon} />
      </Grid>
    </Grid>
  );
};

const places = [
  "Vizag",
  "Hyderabad",
  "Kakinada",
  "Rajamundry",
  "Samalkota",
  "Vizyanagaram",
  "Warangal",
  "Delhi",
];

export default SetLocation;
