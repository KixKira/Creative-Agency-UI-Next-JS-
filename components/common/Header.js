import { AiOutlineClose } from "react-icons/ai";
import { RiMenu4Line } from "react-icons/ri";
import { TitleLogo } from "./Title";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setActiveLink(router.pathname);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [router.pathname]);

  return (
    <header className={isScrolled ? "solid-header" : "transparent-header"}>
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
            Inicio
          </Link>
          <Link
            href="/proyects"
            className={activeLink == "/proyects" ? "activeLink" : "none"}
          >
            Proyectos
          </Link>

          <Link
            href="/#"
            className={activeLink == "/#" ? "activeLink" : "none"}
          >
            Nosotros
          </Link>

          <Link
            href="/contact"
            className={activeLink == "/contact" ? "activeLink" : "none"}
          >
            Contacto
          </Link>
        </nav>
        <button onClick={() => setOpen(!open)}>
          {open ? <AiOutlineClose size={25} /> : <RiMenu4Line size={25} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
