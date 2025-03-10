import { AiOutlineClose } from "react-icons/ai";
import { RiMenu4Line } from "react-icons/ri";
import { TitleLogo } from "./Title";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const [open, setOpen] = useState(false);

  const router = useRouter();
  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);
  return (
    <header>
      <div className="container">
        <div className="logo">
          <Link href="/">
            <TitleLogo />
          </Link>
        </div>
        <nav
          className={open ? "openMenu" : "closeMenu"}
          onClick={() => setOpen(null)}
        >
          <Link href="/" className={activeLink == "/" ? "activeLink" : "none"}>
            Home
          </Link>
          <Link
            href="/agency"
            className={activeLink == "/agency" ? "activeLink" : "none"}
          >
            Agency
          </Link>
          <Link
            href="/team"
            className={activeLink == "/team" ? "activeLink" : "none"}
          >
            Team
          </Link>
          <Link
            href="/services"
            className={activeLink == "/services" ? "activeLink" : "none"}
          >
            Services
          </Link>
          <Link
            href="/showcase"
            className={activeLink == "/showcase" ? "activeLink" : "none"}
          >
            Showcase
          </Link>
          <Link
            href="/contact"
            className={activeLink == "/contact" ? "activeLink" : "none"}
          >
            Contact
          </Link>
          {/* <button className="button-primary">book a consultation</button> */}
        </nav>
        {/* <button onClick={() => setOpen(!open)}>
          {open ? <AiOutlineClose size={25} /> : <RiMenu4Line size={25} />}
        </button> */}
      </div>
    </header>
  );
};

export default Header;
