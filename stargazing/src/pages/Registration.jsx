import React from "react";
import  "../styles/Registration.css";
export default function Registration() {
  return (
    <form>
      <div className="signup">
        <h1>Sign up</h1>
        <label>
          <p>username</p>
          <input type="text" placeholder="Username"/>
        </label>
        <label>
          <p>Email</p>
          <input type="text" placeholder="Email"/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" placeholder="Password" />
        </label>
        <label>
          <p>Confirm Password</p>
          <input type="password" placeholder="Confirm Password" />
        </label>
        <div>
          <button type="submit">Confirm</button>
        </div>
      </div>
    </form>
  );
}
