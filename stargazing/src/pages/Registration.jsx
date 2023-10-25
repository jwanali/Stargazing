import React from "react";
import  ../Registration.css;
export default function Registration() {
  return (
    <form>
      <div className="">
        <label>
          <p>username</p>
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
      </div>
    </form>
  );
}
