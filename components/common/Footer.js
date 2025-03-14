import Link from "next/link";
import { TitleLogo } from "./Title";
import { BsFacebook } from "react-icons/bs";
import {
  AiFillBehanceCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="grid-3">
          <div className="logo">
            <TitleLogo title="creative" caption="7" className="logobg" />
            <br />
            <button className="button-primary-footer">Request for quote</button>
          </div>
          <ul>
            <h3>JUWEARE</h3>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/agency">Agency</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          {/* <ul>
            <h3>SERVICES</h3>
            <li>
              <Link href="/">Web Design & Development</Link>
            </li>
            <li>
              <Link href="/">Branding & Creative Services</Link>
            </li>
            <li>
              <Link href="/">Digital Marketing</Link>
            </li>
            <li>
              <Link href="/">E-Commerce</Link>
            </li>
          </ul> */}
          <ul>
            <h3>CONNECT</h3>
            <div className="connect">
              <li>
                <Link href="/">
                  <BsFacebook size={25} />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <AiFillBehanceCircle size={25} />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <AiFillInstagram size={25} />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <AiFillLinkedin size={25} />
                </Link>
              </li>
            </div>
          </ul>
        </div>
        <div className="legal connect">
          <div className="text">
            <span>© 2023 THE SEVEN. ALL RIGHTS RESERVED.</span>
          </div>
          <div className="connect">
            <span>GORKCODER COMPANY</span>
            <span> &nbsp; | &nbsp; </span>
            <span>TERMS & CONDITIONS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
