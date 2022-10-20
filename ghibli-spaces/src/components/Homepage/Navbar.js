import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="logo">GHIBLI SPACES</div>
      <ul>
        <li>
          <NavLink to="#" className="login">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="#" className="sign-up">
            SignUp
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
