import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";
function Login() {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        alert(error.messsage);
      });
  };
  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://cdn.dribbble.com/users/116728/screenshots/3373498/slack_animation.gif"
          alt=""
        />
        <h1>Sign in to Ritish room</h1>
        <p>Ritish.slack.com</p>
        <Button onClick={signIn}>Sign in with google</Button>
      </div>
    </div>
  );
}

export default Login;
