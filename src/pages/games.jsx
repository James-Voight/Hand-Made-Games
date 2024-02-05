import React from 'react';
import { NavLink } from "react-router-dom";
import './games.css'

function Games() {
  
    return (
      <div>
            <h1 id="games">
                Games
            </h1>
            <div>
              <NavLink to="/LPS">
                Lapis, Papyrus, Scalpellus
              </NavLink>
              <br />
              <NavLink to="/Connect">
                Connect 4
              </NavLink>
            </div>
        </div>
    )
  }
  
  export default Games