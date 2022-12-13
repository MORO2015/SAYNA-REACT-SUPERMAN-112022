import React, { useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import Cart from "../components/Cart";
import "../styles/Eshop.css";
import Products from "../components/Products";

function Eshop() {
  return (
    <>
      <section id="">
        <div className="container">
          <h2>ENVI D'UN SLIP JAUNE?</h2>
        </div>
      </section>
      <section id="article">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <h3>Filtre</h3>
            </div>
            <div className="col-md-9">
              <Products />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Eshop;
