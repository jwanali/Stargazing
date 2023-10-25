import React from "react";
import  "../styles/Login.css";
export default function Login() {
  return (
    <form>
      <div className="login">
        <h1>Login</h1>
        <label>
            <input type="text" placeholder="email" name="email" />
        </label>
        <label>
          <input type="password" placeholder="password" name="password" />
        </label>
        <div>
          <button type="submit">Login</button>
        </div>
      </div>
    </form>
  );
}
