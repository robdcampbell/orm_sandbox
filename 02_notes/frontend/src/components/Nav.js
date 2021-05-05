import React from "react";

const Nav = () => {
  return (
    <nav className="topNav">
      <ul>
        <li>
          <a href="/">Notes.</a>
        </li>
        <a href="/profile">Profile</a>
        <li className="register-items">
          <a href="/login">Login</a>
          <a href="/signup">Sign Up</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
