import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css"
 
const Navbar = () => {
    return (
        <div id="nav">
          <NavLink to="/">
              Home
          </NavLink>
          &nbsp; | &nbsp;
          <NavLink to="/about">
              About
          </NavLink>
          &nbsp; | &nbsp;
          <NavLink to="/games">
              Games
          </NavLink>
        </div>
    );
};
 
export default Navbar;