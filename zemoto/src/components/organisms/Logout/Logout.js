import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "../../atoms/Typography/Typography";

const useStyles = makeStyles({
  button: {
    color: "white",
  },
});

function LogoutButton(props) {
  const classes = useStyles();

  const { isAuthenticated, logout } = useAuth0();
  let buttonClass = "";
  if (props.color !== "black") {
    buttonClass = classes.button;
  }
  return (
    (isAuthenticated && (
      <div
        className={buttonClass}
        onClick={() => {
          logout({ returnTo: window.location.origin });
        }}
      >
        <Typography mode="link" variant="h6">Log-out</Typography>
      </div>
    )) ||
    (!isAuthenticated && <div className={buttonClass}> <Typography mode="link"  variant="h6">Signup</Typography></div>)
  );
}

export default LogoutButton;
