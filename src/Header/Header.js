import { Button} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";

export const Header = () => {
  return (
    <div className="header shadow-5">
      <NavLink to="/" className="name">
        Portfolio
      </NavLink>
      <div className="forme">
        <Button color="inherit">
          <NavLink
            to="/pages/aboutme"
            className={({ isActive }) =>
              isActive ? "active-menu-NavLink" : "menu-NavLink"
            }
          >
            About me
          </NavLink>
        </Button>
        <Button color="inherit">
          <NavLink
            to="/pages/projects"
            className={({ isActive }) =>
              isActive ? "active-menu-NavLink" : "menu-NavLink"
            }
          >
            Projects
          </NavLink>
        </Button>
      </div>
    </div>
  );
};
