
import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      {" "}
      <ul>
        {" "}
        <li>
          {" "}
          <Link to="/"></Link>{" "}
        </li>{" "}
        <li>
          {" "}
          <Link to="/Login">Login</Link>{" "}
        </li>{" "}
        <li>
          {" "}
          <Link to="/Registration">Registration</Link>{" "}
        </li>{" "}
      </ul>{" "}
    </nav>
  );
}
export default Navbar;
