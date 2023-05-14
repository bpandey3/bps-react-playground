import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const activeStyle = { color: "#8b0000" };
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/scientist" activeStyle={activeStyle}>
      Scientist
      </NavLink>
      {" | "}
      <NavLink to="/apicall" activeStyle={activeStyle}>
      Apicall
      </NavLink>
    </nav>
  );
}

