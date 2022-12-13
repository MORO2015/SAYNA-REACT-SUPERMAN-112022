import React from "react";
import { Link } from "react-router-dom";
import "../styles/Signup.css";

function Signup() {
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
          <h2 className="text-white">INSCRIPTION</h2>
          <div className="d-flex justify-content-center">
            <p className="text-white"> Vous avez déja un compte?</p> &nbsp;
            <Link to="/login" className="text-white">
              Connectez-vous ici
            </Link>
          </div>
        </div>
        <div className="container form">
          <form>
            <div className="container">
              <div className="form-group mb-2">
                <label for="" className="mb-2">
                  NOM
                </label>
                <input
                  type="text"
                  className="form-control"
                  id=""
                  aria-describedby=""
                  placeholder="Nom"
                />
                <small id="emailHelp" class="form-text text-muted"></small>
              </div>
              <div className="form-group mb-2">
                <label for="" className="mb-2">
                  PRENOM
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby=""
                  placeholder="Prénom"
                />
                <small id="emailHelp" class="form-text text-muted"></small>
              </div>
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
              <div className="form-group mb-2">
                <label for="" className="mb-2">
                  CONFIRMER VOTRE MO DE PASSE
                </label>
                <input
                  type="text"
                  className="form-control"
                  id=""
                  aria-describedby=""
                  placeholder="Confirmation du mot de passe"
                />
                <small id="emailHelp" class="form-text text-muted"></small>
              </div>
              <div class="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                />
                <label
                  className="form-check-label"
                  for="flexSwitchCheckDefault"
                >
                  Je reconnais avoir pris connaissance et j'accepte les termes
                  des
                  <br />
                  <Link to=""> conditions générales d'utilisation</Link>
                </label>
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

export default Signup;
