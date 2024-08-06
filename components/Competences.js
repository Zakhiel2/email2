"use client";
export const SavoirFaire = () => {
  return (
    <div className="section competences section_" id="competences">
      <div className="content">
        <div className="title">
          <div className="title_inner">Savoir-faire</div>
        </div>
        <div className="skills">
          <ul>
            <li>
              <div className="name">Maintenance Informatique</div>
              <div className="progress">
                <div className="percentage" style={{ width: "100%" }}>
                  <span className="percent">100%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Ticketing</div>
              <div className="progress">
                <div className="percentage" style={{ width: "100%" }}>
                  <span className="percent">100%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">SQL & Base de données</div>
              <div className="progress">
                <div className="percentage" style={{ width: "90%" }}>
                  <span className="percent">90%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Hardware</div>
              <div className="progress">
                <div className="percentage" style={{ width: "80%" }}>
                  <span className="percent">80%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Réseau & Sécurité</div>
              <div className="progress">
                <div className="percentage" style={{ width: "60%" }}>
                  <span className="percent">60%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Environnement Windows</div>
              <div className="progress">
                <div className="percentage" style={{ width: "90%" }}>
                  <span className="percent">90%</span>
                </div>
              </div>
            </li>            
          </ul>
        </div>
      </div>
    </div>
  );
};

export const SavoirEtre = () => {
  return (
    <div className="section competences">
      <div className="content">
        <div className="title">
          <div className="title_inner">Savoir-être</div>
        </div>
        <div className="skills list">
          <ul>
            <li>
              <div className="name">Adaptabilité</div>
            </li>
            <li>
              <div className="name">Autonomie</div>
            </li>
            <li>
              <div className="name">Curiosité</div>
            </li>
            <li>
              <div className="name">Discrétion</div>
            </li>
            <li>
              <div className="name">Ecoute active</div>
            </li>
            <li>
              <div className="name">Force de proposition</div>
            </li>
            <li>
              <div className="name">Organisation</div>
            </li>
            <li>
              <div className="name">Pédagogie</div>
            </li>
            <li>
              <div className="name">Prise de décisions</div>
            </li>
            <li>
              <div className="name">Résolution de problèmes</div>
            </li>
            <li>
              <div className="name">Responsabilité</div>
            </li>
            <li>
              <div className="name">Rigueur</div>
            </li>            
          </ul>
        </div>
      </div>
    </div>
  );
};

export const Langues = () => {
  useEffect(() => {
    glitcheUtils.dotResize();
    setTimeout(glitcheUtils.createSkillsDot(), 1000);
  }, []);

  return (
    <div className="section competences">
      <div className="content">
        <div className="title">
          <div className="title_inner">Langues</div>
        </div>
        <div className="skills dotted">
          <ul>
            <li>
              <div className="name">Français</div>
              <div className="progress">
                <div className="percentage" style={{ width: "100%" }}>
                  <span className="percent">100%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Anglais</div>
              <div className="progress ">
                <div className="percentage" style={{ width: "85%" }}>
                  <span className="percent">85%</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

import { glitcheUtils } from "@/utility";
import { Fragment, useEffect } from "react";
const Competences = ({
  savoirfaire = true,
  savoiretre = true,  
  langues = true
}) => {
  return (
    <Fragment>
      {savoirfaire && <SavoirFaire />}
      {savoiretre && <SavoirEtre />}
      {langues && <Langues />}      
    </Fragment>
  );
};
export default Competences;
