import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Footer.css";
import DC from "../assets/icones/icon_DC.png";
import x from "../assets/icones/icon_x.png";
import sayna from "../assets/icones/logo_sayna_white.png";
import facebook from "../assets/icones/icon_facebook.png";
import instagram from "../assets/icones/icon_ig.png";
import twitter from "../assets/icones/twitter.png";
import wb from "../assets/icones/icon_WB.png";
function Footer() {
  return (
    <>
      <footer>
        <div className="section">
          <div className="pied">
            <div className="logo-text">
              <img src={wb} alt="" />
              <p className="text-white ml-3">
                Ce projet respecte l’univers cinématographique des films Batman
                récents. Version Nolan & Snyder & Reeves
              </p>
            </div>
            <div className="logo-aligne">
              <NavLink>
                <img src={sayna} alt="" />
                <img src={x} alt="" />
                <img src={DC} alt="" />
              </NavLink>
              <NavLink>
                <img src={facebook} alt="" />
              </NavLink>
              <NavLink>
                <img src={instagram} alt="" />
              </NavLink>
              <NavLink>
                <img src={twitter} alt="" />
              </NavLink>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
