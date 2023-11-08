import React, { useState} from "react";
import  "../styles/Registration.css";
import Alert from "./Alert";
import { Navigate } from "react-router-dom";

export default function Registration(props) {

  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });  

  
  if (props.message) {
    return <Navigate to="/" />;
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.onSignUp(state);
      }}
    >
      {props.message && (
        <Alert message={props.message} messageType={props.messageType} />
      )}
      <div className="signup">
        <h1>Sign up</h1>
        <label>
          <p>username</p>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => {
              setState({ ...state, name: e.target.value });
            }}
          />
        </label>
        <label>
          <p>Email</p>
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => {
              setState({ ...state, email: e.target.value });
            }}
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setState({ ...state, password: e.target.value });
            }}
          />
        </label>
        <label>
          <p>Confirm Password</p>
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => {
              setState({ ...state, password_confirmation: e.target.value });
            }}
          />
        </label>
        <div>
          <button type="submit">Confirm</button>
        </div>
      </div>
    </form>
  );
}
