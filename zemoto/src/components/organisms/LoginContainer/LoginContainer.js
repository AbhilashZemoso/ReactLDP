import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "../../atoms/Typography/Typography";
import { makeStyles } from "@material-ui/core/styles";
import auth from "../../../auth/initAuth";

const useStyles = makeStyles((theme) => ({

  container: {
    //backgroundColor: 'white',
    borderRadius: "40px",
    padding: "60px 20px",
    width: "500px",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function LoginContainer() {
  const classes = useStyles();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    //console.log(email);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e, data) => {
    e.preventDefault();
    //console.log(email+" "+password);
    auth.login(email, password);
  };
  const handleLoginWithGoogle = (e) => {
    e.preventDefault();
    auth.loginWithGoogle();
  };
  return (
    <Grid container justify="center" >
      <Grid item className={classes.container}>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onKeyUp={handleEmailChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              autoComplete="current-password"
              onKeyUp={handlePasswordChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
            >
              Sign In
            </Button>

            <Grid container>
              <Grid item>
                <Link to="/signup" style={{ textDecoration: "inherit" }}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

/*
  _handleSubmit = (e, data) => {
    e.preventDefault();
    auth.login(this.state.email, this.state.password);
  };
  _handleLoginWithGoogle = (e) => {
    e.preventDefault();
    auth.loginWithGoogle();
  };


  <Grid container justify="center">
              <Grid item>
                <Typography variant="h7">OR</Typography>
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
              onClick={handleLoginWithGoogle}
            >
              Continue with Google
            </Button>

            
*/
