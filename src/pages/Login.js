import React from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  return (
    <>
      <section id="hero">
        <div className="hero-image">
          <div className="container">
            <h1 className="hero-title text-uppercase text-white"></h1>
          </div>
        </div>
      </section>
      <div className="container formulaire">
        <div className="head text-center">
          <h2 className="text-white">CONNEXION</h2>
          <div className="d-flex justify-content-center">
            <p className="text-white"> Vous n'avez pas de compte?</p> &nbsp;
            <Link to="/signup" className="text-white">
              Connectez-vous ici
            </Link>
          </div>
        </div>
        <div className="container form">
          <form>
            <div className="container">
              <div className="form-group mb-2">
                <label for="email" className="mb-2">
                  IDENTIFIANT
                </label>
                <input
                  type="mail"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby=""
                  placeholder="Email"
                />
                <small id="emailHelp" class="form-text text-muted"></small>
              </div>
              <div class="form-group mb-2">
                <label for="" className="mb-2">
                  MOT DE PASSE
                </label>
                <input
                  type="password"
                  className="form-control"
                  id=""
                  placeholder="Mot de passe"
                />
              </div>
              <div className="w-100">
                <button
                  type="button"
                  class="btn btn-bg btn-lg btn-block w-100 mt-3"
                >
                  Valider
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
