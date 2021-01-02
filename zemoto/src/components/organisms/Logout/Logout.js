import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
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

function LogoutButton(props) {
  const classes = useStyles();

  const { isAuthenticated, logout } = useAuth0();
  let buttonClass = classes.button;
  if(props.color==="black"){
    buttonClass = classes.darkButton;
  }
  return (
    (isAuthenticated && (
      <Button
        className={buttonClass}
        onClick={() => {
          logout({ returnTo: window.location.origin });
        }}
      >
        Log out
      </Button>
    )) ||
    (!isAuthenticated && <Button className={buttonClass}>Signup</Button>)
  );
}

export default LogoutButton;
