import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {onSignUp, onLogin, message,messageType, onCreateEvent } from "../hook/useApplicationData";
import Alert from "./Alert";
import "../styles/Login.css";
export default function Login(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  // const history = useHistory();

  // const handleSubmit = async(e) => {
  //   e.preventDefault();

  //   const loginResult = await onLogin(state);
  //   props.onLogin(state);
  //   if(loginResult.success) {
  //     history.push("/home");
  //   } else {
  //     history.push("/signup");
  //   }
      
  // }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.onLogin(state);
      }}
    >
      {props.message && (
        <Alert message={props.message} messageType={props.messageType} />
      )}
      <div className="login">
        <h1>Login</h1>
        <label>
          <input
            type="text"
            placeholder="email"
            name="email"
            onChange={(e) => {
              setState({ ...state, email: e.target.value });
            }}
          />
        </label>
        <label>
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={(e) => {
              setState({ ...state, password: e.target.value });
            }}
          />
        </label>
        <div>
          <button type="submit">Login</button>
        </div>
      </div>
    </form>
  );
}
