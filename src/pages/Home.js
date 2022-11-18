import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Home.css";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";
import img5 from "../assets/images/img5.png";
import img6 from "../assets/images/img6.png";
import img7 from "../assets/images/img7.png";
import img8 from "../assets/images/img8.png";
import img9 from "../assets/images/img9.png";
import img10 from "../assets/images/img10.png";
import Polygon1 from "../assets/icones/Polygon.png";
import Polygon2 from "../assets/icones/Polygon-1.png";
import superman from "../assets/images/img12.png";
import guilleme1 from "../assets/icones/icon_guillemets_1.png";
import guilleme2 from "../assets/icones/icon_guillemets_2.png";
import facebook from "../assets/icones/icon_facebook.png";
import ig from "../assets/icones/icon_ig.png";
import tw from "../assets/icones/icon_tw.png";
function Home() {
  return (
    <>
      <section id="hero">
        <div className="text-modif">
          <div className="carde-text">
            <h2 className="text-blod">.</h2>
          </div>
        </div>
        <div className="image-aligne">
          <img src={facebook} alt="" srcset="" />
          <img src={tw} alt="" srcset="" />
          <img src={ig} alt="" srcset="" />
        </div>
      </section>

      <section id="description">
        <div className="container">
          <div className="biographie">
            <h2 className="titre mt-2 text-white">SUPERMAN AU CINÉMA</h2>
            <p className="texte text-white align-text mt-3">
              Dans la version actuelle de son histoire, Superman est né sur la
              planète Krypton sous le nom de « Kal-El ». Encore bébé, il fut
              placé dans un vaisseau spatial par son père, le scientifique
              Jor-El, et sa mère, Lara, car la planète était sous la menace
              d'une destruction totale.Le vaisseau quitta Krypton juste avant
              l'explosion fatidique... Au terme d'un très long voyage, il
              atterrit sur la planète Terre. Kal-El est trouvé par un couple de
              fermiers de Smallville, (Kansas). Jonathan et Martha Kent, qui
              n'ont pas d'enfant, décident alors de l'adopter et de garder le
              secret sur son origine. Kal-El est rebaptisé « Clark Joseph Kent »
              et grandit entouré de ses amis Lana Lang (son premier amour) et
              Pete Ross jusqu'à ce que ses pouvoirs se révèlent à lui au moment
              de son adolescence.Jeune adulte, Clark décide de s'installer à
              Metropolis pour devenir journaliste. Il y est engagé par Perry
              White, le rédacteur en chef du Daily Planet. Pour sauver les
              personnes qui lui sont chers ainsi que les habitants de la Terre,
              Clark revêt son costume et devient Superman, l’homme d’acier aux
              yeux du monde.
            </p>
            <div className="row justify-content-around mt-2">
              <div className=" col-md-3">
                <div className="card">
                  <img src={img2} alt="" className="card-img" />
                </div>
              </div>
              <div className=" col-md-3">
                <div className="card border-3">
                  <img src={img3} alt="" className="card-img" />
                </div>
              </div>
              <div className=" col-md-3">
                <div className="card">
                  <img src={img4} alt="" className="card-img" />
                </div>
              </div>
            </div>
          </div>
          <div className="biographie2 mt-3">
            <h2 className="titre mt-2 text-white">NÉMÉSIS</h2>
            <p className="texte text-white align-text mt-3">
              Superman mène une lutte sans fin contre de nombreux adversaires,
              son adversaire le plus connu étant le milliardaire Lex Luthor,
              fils de Lionel Luthor, qui déteste tout ce qu'incarne Superman et
              finira notamment par devenir président des États-Unis, ce qui
              participera à faire de lui le pire ennemi de Clark. Doomsday, une
              abomination génétique qui souhaite tout détruire sur son passage,
              sera celui qui réussira à tuer Superman. Zod est un kryptonien qui
              fut condamné à l'emprisonnement dans la Zone Fantôme pour s'être
              insurgé contre les autorités. Il est libéré et vient sur Terre
              pour la conquérir mais est arrêté par Superman. Étant kryptonien,
              Zod possède les mêmes pouvoirs que Superman, et constitue donc
              l'un de ses plus dangereux adversaires.
            </p>
            <div className="row justify-content-around mt-2">
              <div className=" col-md-3">
                <div className="card">
                  <img src={img5} alt="" className="card-img" />
                </div>
              </div>
              <div className=" col-md-3">
                <div className="card border-3">
                  <img src={img6} alt="" className="card-img" />
                </div>
              </div>
              <div className=" col-md-3">
                <div className="card">
                  <img src={img7} alt="" className="card-img" />
                </div>
              </div>
            </div>
          </div>
          <div className="biographie2 mt-3">
            <h2 className="titre mt-2 text-white">ALLIES</h2>
            <p className="texte text-white align-text mt-3">
              Jor-El était le père biologique de Kal-El, ainsi que le savant le
              plus célèbre de Krypton et un membre influent du Conseil des
              Sciences. Lorsque Krypton s’effondre il place une version
              impuissante de lui même dans le vaisseau emportant Kal-El vers la
              Terre afin de lui apporter les réponses à ses questions quand il
              grandira. Sur Terre Clark est pris en charge par Jonathan et
              Martha Kent qui l’élèvent comme leur propre fils. Lorsque John
              sera mort, Clark pourra compter sur le soutien indéféctible de sa
              mère. Une fois engagé au Daily Planet, il rencontrera Loïs Lane
              qui deviendra sa partenaire et son seul “véritable amour”
            </p>
            <div className="row justify-content-around mt-2">
              <div className=" col-md-3">
                <div className="card">
                  <img src={img8} alt="" className="card-img" />
                </div>
              </div>
              <div className=" col-md-3">
                <div className="card border-3">
                  <img src={img9} alt="" className="card-img" />
                </div>
              </div>
              <div className=" col-md-3">
                <div className="card">
                  <img src={img10} alt="" className="card-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="bat-super">
        <div className="container-fluid">
          <div className="bat-super">
            <h2 className="text-white">BATMAN V SUPERMAN</h2>
            <p className="texte text-white">
              Le monde n’est pas assez grand pour deux super héros. Alors que
              Superman se battait contre Zod, l’affrontement fait des dégats et
              détruit partiellement la ville de Métropolis. Bruce Wayne alors
              présent dans la ville assiste, impuissant, à l’effondrement de la
              ville qui fait beaucoup de victimes. Wayne est alors persuadé que
              Superman causera un jour la perte de l'Humanité et qu'il est
              inévitable de se préparer à l'éliminer. Devenu méfiant il se
              demande si l'homme de fer, cet extraterrestre de Krypton, qui peut
              à lui seul détruire le monde d'une simple pichenette, décidera un
              jour de ne plus défendre la Terre, voire même de causer sa perte.
              <br />
              <br />
              De son côté Superman d’une part cherche à se défendre mais
              retourne l’offensive contre Batman. Ce dernier n'est plus que
              l'ombre de lui-même. Devenu un justicier impitoyable, mégalomane
              et cruel à la suite du meurtre de son ancien partenaire Robin par
              le Joker, il n'hésite plus à violer son code moral en éliminant et
              marquant au fer les criminels. Superman souhaite simplement lui
              rappeler le code moral des “justicier” en usant de la force s’il
              le faut pour que Batman cesse son comportement abusif.
            </p>
            <h3 className="text-white mb-3">MULTIMEDIA </h3>
            <div div className="col-md-6 d-flex  carousel text-align-items">
              <img src={Polygon2} height={60} alt="flche-gauche" />
              <div className="d-flex element">
                <img src={superman} alt="super_man" />
                <div className="description">
                  <h5>ACTION, Adventure</h5>
                  <h3 class="police">Super Man of Steel</h3>
                  <h3>
                    IMDB : <span className="text-yellow">7.1</span>
                  </h3>
                  <p className="text-white">
                    Clark Kent, malgré son apparence humaine normale, est l'un
                    des derniers membres d'une race éteinte. Il se retrouve
                    forcé de révéler son identité lorsque la Terre est envahie
                    par une armée de survivants qui menacent détruire la
                    planète.
                  </p>
                </div>
              </div>
              <img src={Polygon1} height={60} alt="fleche-droite" />
            </div>
          </div>
        </div>
      </section>
      <section className="formulaire">
        <div className="carde-formulaire">
          <h1>Prenons contact</h1>
          <form action="">
            <label for="email">Adresse email</label>
            <br />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Adresse email"
            />
            <br />
            <label for="">NEWSLETTER</label> <br />
            <p>
              En cochant cette case vous acceptez de recevoir l’actualité
              concernant les aventures de Batman :
              <input type="checkbox" name="Case à cocher" id="Case à cocher" />
            </p>
            <br />
            <select name="" id="">
              <option value="">
                Choisissez la fréquence à laquelle vous souhaitez recevoir votre
                newsletter
              </option>
            </select>
            <p className="avis">Souhaitez-vous recevoir des news</p>
            <hr />
            <div className="bouton-forme">
              <button>
                <NavLink>Des films</NavLink>
              </button>
              <button>
                <NavLink>Des commics</NavLink>
              </button>
              <button>
                <NavLink>De tout</NavLink>
              </button>
            </div>
            <label>MESSAGE</label>
            <br />
            <textarea
              name=""
              id=""
              cols="30"
              placeholder=" Laissez un commentaire pour la communauté "
            ></textarea>
            <div className="confirme">
              <input type="submit" value="CONFIRMER" />
            </div>
          </form>
        </div>
      </section>
      {/* partie de la citation */}
      <div className="section">
        <div className="loli">
          <div className="image-left">
            <img src={guilleme1} alt="" />
          </div>
          <div className="text-uniq">
            <p className="regle">
              « La seule façon raisonnable de vivre en ce bas monde, <br />{" "}
              c'est en dehors des règles. »
            </p>
            <p className="petite-text text-white">
              The Dark Knight : Le Chevalier Noir - Le Joker à Batman (2008)
            </p>
          </div>
          <div className="image-right">
            <img src={guilleme2} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
