import React, { useState } from "react";
import "../styles/Login.css";
export default function Login(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.onLogin(state);
      }}
    >
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
