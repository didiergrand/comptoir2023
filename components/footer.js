import Image from "next/image";
import acv from "../public/sponsors/acv.png";
import chatelstdenis from "../public/sponsors/chatel-st-denis.png";
import chardonnens from "../public/sponsors/chardonnens.png";
import regiechatel from "../public/sponsors/regie-chatel.png";
import mesa from "../public/sponsors/mesa.png";
import coquoz from "../public/sponsors/coquoz.png";
import bcf from "../public/sponsors/bcf.png";
import dgLogo from "../public/logo-dg.png";

function Footer() {
  return (
    <footer>
      <div id="sponsors">
        <div className="container">
          <h3>Sponsors officiels</h3>
          <div className="sponsors">
            <a href="https://acv-fr.ch/" target="_blank" rel="noreferrer">
              <Image src={acv} alt="ACV" className="avc" />
            </a>
            <a
              href="https://www.chatel-st-denis.ch/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={chatelstdenis}
                alt="Commune de Châtel-St-Denis"
                className="chatel"
              />
            </a>
            <a
              href="http://chardonnens-boissons.ch/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={chardonnens}
                alt="Chardonnens Boissons"
                className="chardonnens"
              />
            </a>
            <a
              href="https://www.regiechatel.ch/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={regiechatel}
                alt="Régie Châtel"
                className="regiechatel"
              />
            </a>
            <a href="https://www.mesa.ch/" target="_blank" rel="noreferrer">
              <Image
                src={mesa}
                alt="Mesa - Millasson Electricité SA"
                className="mesa"
              />
            </a>
            <a
              href="https://www.coquoz-constructions.ch/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={coquoz}
                alt="Coquoz Constructions Sa"
                className="coquoz"
              />
            </a>
            <a href="https://www.bcf.ch/" target="_blank" rel="noreferrer">
              <Image src={bcf} alt="BCF" className="bcf" />
            </a>
          </div>
        </div>
      </div>
      <div id="copy">
        <div className="container">
          ©2023 Comptoir de la Veveyse | webdesign & code : Didier Grand - <a href="https://digitalgarage.ch" target="_blank" rel="noreferrer">
            digitalgarage.ch
          </a>
        </div>
      </div>
      <div id="dgBanner" className="bg-gradient-to-r from-sky-700 to-sky-900">
        <div className="container">
          <a href="https://digitalgarage.ch" target="_blank" rel="noreferrer">
            <Image src={dgLogo} alt="DigitalGarage" width={200} height={55} />
          </a>
          <div id="dgText">
            <h1>
              Comme le comptoir de la Veveyse, faites confiance à Digitalgarage
              pour votre site internet.
            </h1>
            <p>
              Donnez à votre site web une touche personnelle qui reflète votre
              entreprise! Digitalgarage, avec plus de 20 ans d’expérience en
              design et développement web, crée des sites modernes et fiables,
              adaptés à l’image de votre entreprise. <br />
              Visitez <a href="https://digitalgarage.ch" target="_blank" rel="noreferrer">digitalgarage.ch</a> pour pour en savoir plus.
            </p>
          </div>
          <div id="dgBtn">
            <a
              href="https://digitalgarage.ch"
              target="_blank"
              rel="noreferrer"
              className="btn bg-gradient-to-r from-sky-400 to-sky-600 opacity-80 transition duration-500 hover:shadow-md hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-opacity-75 inline-flex"
            >
              digitalgarage.ch
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
