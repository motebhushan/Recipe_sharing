import React from "react";
import { NavLink } from "react-router-dom";
import "./Component.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/Recipe_tab" activeClassName="active">
            Recipes
          </NavLink>
        </li>
        <li>
          <NavLink to="/AboutUs" activeClassName="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/ContactUs" activeClassName="active">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
