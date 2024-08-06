"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const onClick = (e) => {
    e.preventDefault();
    setToggle(!toggle);
  };

  const [pathname, setPathname] = useState("accueil");
  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  return (
    <header className={toggle ? "active" : ""}>
      <div className="head-top">
        <a href="#" className="menu-btn" onClick={(e) => onClick(e)}>
          <span />
        </a>
        <div className="logo">
          <Link href="/">
            <img src={`/images/logo.png`} alt="logo" />
          </Link>
        </div>
        <div className="top-menu">
          <ul>
            <li className={pathname.includes("accueil") ? "active" : ""}>
              <Link href={`/`} className={`lnk`}>
                Accueil
              </Link>
            </li>
            <li className={pathname.includes("clients") ? "active" : ""}>
              <Link href={`clients`} className={`lnk`}>
                Clients
              </Link>
            </li>
            <li className={pathname.includes("competences") ? "active" : ""}>
              <Link href={`competences`} className="lnk">
                Compétences
              </Link>
            </li>
            <li className={pathname.includes("blog") ? "active" : ""}>
              <Link href={`blog`} className="lnk">
                Blog
              </Link>
            </li>
            <li>
              <a href="mailto:logan.bovet@outlook.com" className="btn">
                Me Contacter
              </a>
            </li>
            <li>
              <a href="/documents/CV_BOVET_Logan.pdf" download className="btn fill" data-text="Télécharger CV">
                Télécharger CV
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Header;
