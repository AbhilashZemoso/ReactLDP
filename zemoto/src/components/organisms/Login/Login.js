import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Typography from "../../atoms/Typography/Typography";
//import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  button: {
    color: "white",
  }
});

function LoginButton(props) {
  const classes = useStyles();

  const { isAuthenticated, loginWithRedirect } = useAuth0();

  const user = useAuth0();

  let buttonClass = "";
  if (props.color !== "black") {
    buttonClass = classes.button;
  }
  return (
    (!isAuthenticated && (
      <div onClick={loginWithRedirect}>
        <Typography mode="link" className={buttonClass}  variant="h6" mode="link" >Login</Typography>
      </div>
    )) ||
    (isAuthenticated && (
      <div>
      <Typography className={buttonClass}  variant="h6" mode="link" >{user.user.given_name}</Typography>
      </div>
    ))
  );
}

export default LoginButton;
