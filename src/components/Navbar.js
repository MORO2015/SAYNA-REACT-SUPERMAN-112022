import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import logo_blanc from "../assets/logos/logo_blanc.png";

function Navbar() {
  return (
    <>
      <header>
        <nav>
          <NavLink to={"/"}>
            <img src={logo_blanc} alt="" />
          </NavLink>
          <ul>
            <li>
              <NavLink to={"home"}>HOME</NavLink>
            </li>
            <li>
              <NavLink to={"eshop"}>ESHOP</NavLink>
            </li>
            <li>
              <NavLink to={"moncompte"}>MON COMPTE</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
