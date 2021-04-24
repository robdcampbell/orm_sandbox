import React from "react";

const Nav = () => {
  return (
    <nav className="topNav">
      <ul>
        <li>
          <a href="/">Notes.</a>
        </li>

        <li className="register-items">
          <a href="/">Login</a>
          <a href="/">Sign Up</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
