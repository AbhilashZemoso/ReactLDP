import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";
import ColouredHR from "../../atoms/ColouredHR/ColouredHR";
import TypographyComponent from "../../atoms/Typography/Typography";
import MyPhoto from "../../atoms/MyPhoto/MyPhoto";

const useStyles = makeStyles({
  root: {
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "rgba(0, 0, 0, .9)",
  },
});

const ContactMe = (props) => {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.root}
      alignItems="center"
      justify="center"
    >
      <Grid item>
        <TypographyComponent mode="heading">Get in Touch!</TypographyComponent>
      </Grid>
      <Grid item container justify="center">
        <form id="contact-form">
          <Grid item container direction="row">
            <Grid item lg={5}>
              <TypographyComponent mode="smallFont">Name *</TypographyComponent>
            </Grid>
            <Grid item lg={7}>
              <input
                type="text"
                id="form-name"
                name="name"
                placeholder="Your name..."
              />
            </Grid>
          </Grid>
          <Grid item>
            <TypographyComponent mode="smallFont">Email *</TypographyComponent>
            <input
              type="text"
              id="form-email"
              name="email"
              placeholder="Your email..."
            />
          </Grid>
          <Grid item>
            <TypographyComponent mode="smallFont">Subject</TypographyComponent>
            <textarea
              name="subject"
              placeholder="Write something..."
            ></textarea>
          </Grid>
          <Grid item>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default ContactMe;
