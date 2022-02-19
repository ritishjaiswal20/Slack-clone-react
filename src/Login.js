import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
function Login() {
  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
          alt=""
        />
        <h1>Sign in to Ritish room</h1>
        <p>Ritish.slack.com</p>
        <Button>Sign in with google</Button>
      </div>
    </div>
  );
}

export default Login;
