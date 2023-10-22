import React from "react";

export default function REgistration() {
  return (
    <form>
      <label>
        <p>First Name</p>
        <input type="text" />
      </label>
      <label>
        <p>Last Name</p>
        <input type="text" />
      </label>
      <label>
        <p>Email</p>
        <input type="text" />
      </label>
      <label>
        <p>Password</p>
        <input type="password" />
      </label>
      <label>
        <p>Confirm Password</p>
        <input type="password" />
      </label>
      <div>
        <button type="submit">Register</button>
      </div>
    </form>
  );
}
