import { BsFacebook } from "react-icons/bs";
import { TitleLogo } from "./Title";
import Link from "next/link";
import {
  AiFillBehanceCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="grid-3">
          <div className="logo">
            <TitleLogo title="creative" caption="7" className="logobg" />
            <br />
            <Link href="/contact">
              <button className="button-primary-footer">Contáctanos</button>
            </Link>
          </div>
          <div className="juweare-columns">
            <ul>
              <h3>JUWEARE</h3>
              <li>
                <Link href="/">Inicio</Link>
              </li>
              <li>
                <Link href="/proyects">Proyectos</Link>
              </li>
            </ul>
            <ul>
              <h3 style={{ visibility: "hidden" }} className="testing">
                JUWEARE
              </h3>{" "}
              <li>
                <Link href="/contact">Contacto</Link>
              </li>
            </ul>
          </div>
          <div className="connect-mobile">
            <ul>
              <h3>CONECTAR</h3>
              <div className="connect icons">
                <li>
                  <Link href="/#">
                    <BsFacebook size={25} />
                  </Link>
                </li>
                <li>
                  <Link href="/#">
                    <AiFillBehanceCircle size={25} />
                  </Link>
                </li>
                <li>
                  <Link href="/#">
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link href="/#">
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </div>
        <div className="legal connect">
          <div className="text">
            <span>© {currentYear} JUWEARE. TODOS LOS DERECHOS RESERVADOS.</span>
          </div>
          {/* <div className="connect">
            <span>GORKCODER COMPANY</span>
            <span> &nbsp; | &nbsp; </span>
            <span>TERMS & CONDITIONS</span>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
