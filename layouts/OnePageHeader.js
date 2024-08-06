"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const OnePageHeader = () => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const sections = document.querySelectorAll(".section_");
      const navLi = document.querySelectorAll(".top-menu li");
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id");
        }
      });

      navLi.forEach((li) => {
        if (current !== null) {
          li.classList.remove("active");
        }
        if (
          li.getElementsByTagName("a")[0].getAttribute("href") == `#${current}`
        ) {
          li.classList.add("active");
        }
      });
    });
  }, []);

  const onClick = (e) => {
    e.preventDefault();
    document.querySelector("body").classList.toggle("loaded");
    setToggle(!toggle);
  };

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
            <li className="">
              <a href="#a-propos" className="lnk">
                A propos
              </a>
            </li>
            <li className="">
              <a href="#clients" className="lnk">
                Clients
              </a>
            </li>                        
            <li className="">
              <a href="#competences" className="lnk">
                Compétences
              </a>
            </li>
            <li className="">
              <a href="#blog" className="lnk">
                Blog
              </a>
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
export default OnePageHeader;