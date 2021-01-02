import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
//import Typography from "../Typography/Typography";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  button: {
    fontSize: "25px",
    color: "white",
    fontWeight: "600",
  },
  darkButton: {
    fontSize: "25px",
    fontWeight: "600",
  },
});

function LoginButton(props) {
  const classes = useStyles();

  const { isAuthenticated, loginWithRedirect } = useAuth0();

  let user = useAuth0();
  //console.log(user);

  let buttonClass = classes.button;
  if(props.color==="black"){
    buttonClass = classes.darkButton;
  }
  return (
    (!isAuthenticated && (
      <Button onClick={loginWithRedirect} className={buttonClass}>
        Login
      </Button>
    )) ||
    (isAuthenticated && (
      <Button className={buttonClass}>{user.user.given_name}</Button>
    ))
  );
}

export default LoginButton;
