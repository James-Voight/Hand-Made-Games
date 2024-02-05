import React from "react";
import { NavLink } from "react-router-dom";
 
const Navbar = () => {
    return (
        <>
          <NavLink to="/" activeStyle>
              Home
          </NavLink>
          &nbsp; | &nbsp;
          <NavLink to="/about" activeStyle>
              About
          </NavLink>
          &nbsp; | &nbsp;
          <NavLink to="/games" activeStyle>
              Games
          </NavLink>
        </>
    );
};
 
export default Navbar;