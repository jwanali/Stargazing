import React, { useState } from "react";
import Alert from "./Alert";
import "../styles/Login.css";
import { Navigate } from "react-router-dom";
export default function Login(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

     if (props.message) {
       return <Navigate to="/home" />;
     }
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