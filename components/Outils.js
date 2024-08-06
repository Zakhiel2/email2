"use client";
import { context } from "@/context/context";
import FsLightbox from "fslightbox-react";
import Isotope from "isotope-layout";
import {
  Fragment,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const Outils = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".outils-items", {
        itemSelector: ".box-item",
        // layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".box-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    // return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = useCallback(
    (key) => () => {
      setFilterKey(key);
    },
    []
  );

  const activeBtn = (value) => (value === filterKey ? "glitch-effect" : "");

  const [activeGallaryImage, setActiveGallaryImage] = useState(1);
  const [gallery, setGallery] = useState(false);

  const { modalToggle, setPortfolioModal } = useContext(context);

  return (
    <Fragment>
      <FsLightbox
        toggler={gallery}
      />
      <div className="section works">
        <div className="content">
          <div className="title">
            <div className="title_inner">Outils maîtrisés</div>
          </div>
          <div className="filter-menu">
            <div className="filters">
              <div className="btn-group">
                <label
                  data-text="Tous"
                  className={`c-pointer ${activeBtn("*")}`}
                  onClick={handleFilterKeyChange("*")}
                >
                  <input
                    type="radio"
                    name="fl_radio"
                    defaultValue=".box-item"
                  />
                  Tous
                </label>
              </div>             
              <div className="btn-group">
                <label
                  data-text="CMS"
                  className={`c-pointer ${activeBtn("f-cms")}`}
                  onClick={handleFilterKeyChange("f-cms")}
                >
                  <input type="radio" name="fl_radio" defaultValue=".f-cms" />
                  CMS
                </label>
              </div>
              <div className="btn-group">
                <label
                  data-text="Collab"
                  className={`c-pointer ${activeBtn("f-collab")}`}
                  onClick={handleFilterKeyChange("f-collab")}
                >
                  <input type="radio" name="fl_radio" defaultValue=".f-collab" />
                  Collab
                </label>
              </div>              
              <div className="btn-group">
                <label
                  data-text="Dev"
                  className={`c-pointer ${activeBtn("f-dev")}`}
                  onClick={handleFilterKeyChange("f-dev")}
                >
                  <input type="radio" name="fl_radio" defaultValue=".f-dev" />
                  Dev
                </label>
              </div>
              <div className="btn-group">
                <label
                  data-text="ERP"
                  className={`c-pointer ${activeBtn("f-erp")}`}
                  onClick={handleFilterKeyChange("f-erp")}
                >
                  <input type="radio" name="fl_radio" defaultValue=".f-erp" />
                  ERP
                </label>
              </div>
              <div className="btn-group">
                <label
                  data-text="Hébergeur"
                  className={`c-pointer ${activeBtn("f-hebergeur")}`}
                  onClick={handleFilterKeyChange("f-hebergeur")}
                >
                  <input type="radio" name="fl_radio" defaultValue=".f-hebergeur" />
                  Hébergeur
                </label>
              </div>              
              <div className="btn-group">
                <label
                  data-text="Montage"
                  className={`c-pointer ${activeBtn("f-montage")}`}
                  onClick={handleFilterKeyChange("f-montage")}
                >
                  <input type="radio" name="fl_radio" defaultValue=".f-montage" />
                  Montage
                </label>
              </div>
              <div className="btn-group">
                <label
                  data-text="OS"
                  className={`c-pointer ${activeBtn("f-os")}`}
                  onClick={handleFilterKeyChange("f-os")}
                >
                  <input type="radio" name="fl_radio" defaultValue=".f-os" />
                  OS
                </label>
              </div>
              <div className="btn-group">
                <label
                  data-text="Protection"
                  className={`c-pointer ${activeBtn("f-protection")}`}
                  onClick={handleFilterKeyChange("f-protection")}
                >
                  <input type="radio" name="fl_radio" defaultValue=".f-protection" />
                  Protection
                </label>
              </div>
              <div className="btn-group">
                <label
                  data-text="Remote"
                  className={`c-pointer ${activeBtn("f-remote")}`}
                  onClick={handleFilterKeyChange("f-remote")}
                >
                  <input type="radio" name="fl_radio" defaultValue=".f-remote" />
                  Remote
                </label>
              </div>
              <div className="btn-group">
                <label
                  data-text="Tickets"
                  className={`c-pointer ${activeBtn("f-tickets")}`}
                  onClick={handleFilterKeyChange("f-tickets")}
                >
                  <input type="radio" name="fl_radio" defaultValue=".f-tickets" />
                  Tickets
                </label>
              </div>
              <div className="btn-group">
                <label
                  data-text="VoIP"
                  className={`c-pointer ${activeBtn("f-voip")}`}
                  onClick={handleFilterKeyChange("f-voip")}
                >
                  <input type="radio" name="fl_radio" defaultValue=".f-voip" />
                  VoIP
                </label>
              </div>
              <div className="btn-group">
                <label
                  data-text="Wiki"
                  className={`c-pointer ${activeBtn("f-wiki")}`}
                  onClick={handleFilterKeyChange("f-wiki")}
                >
                  <input type="radio" name="fl_radio" defaultValue=".f-wiki" />
                  Wiki
                </label>
              </div>             
            </div>
          </div>




          <div className="box-items outils-items">

            <div className="box-item f-voip">
              <div className="image">
                <a
                  href="https://www.3cx.fr/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/outils/voip/3cx.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">VoIP</div>
                <a href="https://www.3cx.fr/" target="_blank" className="name has-popup-link">
                  3CX
                </a>
              </div>
            </div>

            <div className="box-item f-dev">
              <div className="image">
                <a
                  href="https://www.microsoft.com/fr-fr/microsoft-365/access"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/outils/dev/access.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Dev</div>
                <a href="https://www.microsoft.com/fr-fr/microsoft-365/access" target="_blank" className="name has-popup-link">
                  Access
                </a>
              </div>
            </div>

            <div className="box-item f-wiki">
              <div className="image">
                <a
                  href="https://www.hyland.com/fr/products/alfresco-platform"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/outils/wiki/alfresco.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Wiki</div>
                <a href="https://www.hyland.com/fr/products/alfresco-platform" target="_blank" className="name has-popup-link">
                  Alfresco
                </a>
              </div>
            </div>

            <div className="box-item f-remote">
              <div className="image">
                <a
                  href="https://anydesk.com/fr"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/outils/remote/anydesk.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Remote</div>
                <a href="https://anydesk.com/fr" target="_blank" className="name has-popup-link">
                  Anydesk
                </a>
              </div>
            </div>

            <div className="box-item f-hebergeur">
              <div className="image">
                <a
                  href="https://aws.amazon.com/fr/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/outils/hebergeur/aws.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Hébergeur</div>
                <a href="https://aws.amazon.com/fr/" target="_blank" className="name has-popup-link">
                  AWS
                </a>
              </div>
            </div>

            <div className="box-item f-protection">
              <div className="image">
                <a
                  href="https://www.bitdefender.fr/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/outils/protection/bitdefender.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Protection</div>
                <a href="https://www.bitdefender.fr/" target="_blank" className="name has-popup-link">
                  Bitdefender
                </a>
              </div>
            </div>

            <div className="box-item f-wiki">
              <div className="image">
                <a
                  href="https://www.atlassian.com/fr/software/confluence"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/outils/wiki/confluence.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Wiki</div>
                <a href="https://www.atlassian.com/fr/software/confluence" target="_blank" className="name has-popup-link">
                  Confluence
                </a>
              </div>
            </div>

            <div className="box-item f-collab">
              <div className="image">
                <a
                  href="https://discord.com/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/outils/collab/discord.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Collaboration</div>
                <a href="https://discord.com/" target="_blank" className="name has-popup-link">
                  Discord
                </a>
              </div>
            </div>

            <div className="box-item f-dev">
              <div className="image">
                <a
                  href="https://www.docker.com/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/outils/dev/docker.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Dev</div>
                <a href="https://www.docker.com/" target="_blank" className="name has-popup-link">
                  Docker
                </a>
              </div>
            </div>

            <div className="box-item f-tickets">
              <div className="image">
                <a
                  href="https://www.freshworks.com/fr/freshdesk/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/outils/tickets/freshdesk.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Tickets</div>
                <a href="https://www.freshworks.com/fr/freshdesk/" target="_blank" className="name has-popup-link">
                  Freshdesk
                </a>
              </div>
            </div>

            <div className="box-item f-montage">
              <div className="image">
                <a
                  href="https://www.gimp.org/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/outils/montage/gimp.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Montage Photo</div>
                <a href="https://www.gimp.org/" target="_blank" className="name has-popup-link">
                  GIMP
                </a>
              </div>
            </div>

            <div className="box-item f-dev">
              <div className="image">
                <a
                  href="https://github.com/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/outils/dev/github.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Dev</div>
                <a href="https://github.com/" target="_blank" className="name has-popup-link">
                  Github
                </a>
              </div>
            </div>

            <div className="box-item f-dev">
              <div className="image">
                <a
                  href="https://about.gitlab.com/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/outils/dev/gitlab.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Dev</div>
                <a href="https://about.gitlab.com/" target="_blank" className="name has-popup-link">
                  Gitlab
                </a>
              </div>
            </div>

            <div className="box-item f-tickets">
              <div className="image">
                <a
                  href="https://glpi-project.org/fr/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/outils/tickets/glpi.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Tickets</div>
                <a href="https://glpi-project.org/fr/" target="_blank" className="name has-popup-link">
                  GLPI
                </a>
              </div>
            </div>

            <div className="box-item f-collab">
              <div className="image">
                <a
                  href="https://www.google.fr/intl/fr/forms/about/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/outils/collab/google-forms.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Collaboration</div>
                <a href="https://www.google.fr/intl/fr/forms/about/" target="_blank" className="name has-popup-link">
                  Google Forms
                </a>
              </div>
            </div>

            <div className="box-item f-hebergeur">
              <div className="image">
                <a
                  href="https://www.infomaniak.com/fr"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/outils/hebergeur/infomaniak.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Hébergeur</div>
                <a href="https://www.infomaniak.com/fr" target="_blank" className="name has-popup-link">
                  Infomaniak
                </a>
              </div>
            </div>

            <div className="box-item f-dev">
              <div className="image">
                <a
                  href="https://www.java.com/fr/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/outils/dev/java.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Dev</div>
                <a href="https://www.java.com/fr/" target="_blank" className="name has-popup-link">
                  Java
                </a>
              </div>
            </div>

            <div className="box-item f-collab">
              <div className="image">
                <a
                  href="https://www.atlassian.com/fr/software/jira"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/outils/collab/jira.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Collaboration</div>
                <a href="https://www.atlassian.com/fr/software/jira" target="_blank" className="name has-popup-link">
                  Jira
                </a>
              </div>
            </div>

            <div className="box-item f-protection">
              <div className="image">
                <a
                  href="https://www.kaspersky.fr/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/outils/protection/kaspersky.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Protection</div>
                <a href="https://www.kaspersky.fr/" target="_blank" className="name has-popup-link">
                  Kaspersky
                </a>
              </div>
            </div>

            <div className="box-item f-wiki">
              <div className="image">
                <a
                  href="https://www.mediawiki.org/wiki/MediaWiki"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/outils/wiki/mediawiki.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Wiki</div>
                <a href="https://www.mediawiki.org/wiki/MediaWiki" target="_blank" className="name has-popup-link">
                  Mediawiki
                </a>
              </div>
            </div>

            <div className="box-item f-collab">
              <div className="image">
                <a
                  href="https://www.microsoft.com/fr-fr/windows-365"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/outils/collab/microsoft365.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Collaboration</div>
                <a href="https://www.microsoft.com/fr-fr/windows-365" target="_blank" className="name has-popup-link">
                  Microsoft 365
                </a>
              </div>
            </div>

            <div className="box-item f-dev">
              <div className="image">
                <a
                  href="https://www.mysql.com/fr/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/outils/dev/mysql.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Dev</div>
                <a href="https://www.mysql.com/fr/" target="_blank" className="name has-popup-link">
                  MySQL
                </a>
              </div>
            </div>

            <div className="box-item f-dev">
              <div className="image">
                <a
                  href="https://nodejs.org/fr"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/outils/dev/nodejs.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Dev</div>
                <a href="https://nodejs.org/fr" target="_blank" className="name has-popup-link">
                  NodeJS
                </a>
              </div>
            </div>

            <div className="box-item f-dev">
              <div className="image">
                <a
                  href="https://notepad-plus-plus.org/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/outils/dev/notepad.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Dev</div>
                <a href="https://notepad-plus-plus.org/" target="_blank" className="name has-popup-link">
                  Notepad
                </a>
              </div>
            </div>

            <div className="box-item f-dev">
              <div className="image">
                <a
                  href="https://www.npmjs.com/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/outils/dev/npm.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Dev</div>
                <a href="https://www.npmjs.com/" target="_blank" className="name has-popup-link">
                  NPM
                </a>
              </div>
            </div>

            <div className="box-item f-hebergeur">
              <div className="image">
                <a
                  href="https://www.o2switch.fr/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/outils/hebergeur/o2switch.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Hébergeur</div>
                <a href="https://www.o2switch.fr/" target="_blank" className="name has-popup-link">
                  O2Switch
                </a>
              </div>
            </div>

            <div className="box-item f-tickets">
              <div className="image">
                <a
                  href="https://otrs.com/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/outils/tickets/otrs.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Tickets</div>
                <a href="https://otrs.com/" target="_blank" className="name has-popup-link">
                  OTRS
                </a>
              </div>
            </div>

            <div className="box-item f-hebergeur">
              <div className="image">
                <a
                  href="https://www.ovhcloud.com/fr/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/outils/hebergeur/ovh.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Hébergeur</div>
                <a href="https://www.ovhcloud.com/fr/" target="_blank" className="name has-popup-link">
                  OVH Cloud
                </a>
              </div>
            </div>

            <div className="box-item f-remote">
              <div className="image">
                <a
                  href="https://parsec.app/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/outils/remote/parsec.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Remote</div>
                <a href="https://parsec.app/" target="_blank" className="name has-popup-link">
                  Parsec
                </a>
              </div>
            </div>

            <div className="box-item f-montage">
              <div className="image">
                <a
                  href="https://www.adobe.com/fr/products/photoshop.html"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/outils/montage/photoshop.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Montage Photo</div>
                <a href="https://www.adobe.com/fr/products/photoshop.html" target="_blank" className="name has-popup-link">
                  Photoshop
                </a>
              </div>
            </div>

            <div className="box-item f-dev">
              <div className="image">
                <a
                  href="https://www.postgresql.org/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/outils/dev/postgresql.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Dev</div>
                <a href="https://www.postgresql.org/" target="_blank" className="name has-popup-link">
                  PostgreSQL
                </a>
              </div>
            </div>

            <div className="box-item f-montage">
              <div className="image">
                <a
                  href="https://www.adobe.com/fr/products/premiere.html"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/outils/montage/premierepro.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Montage Vidéo</div>
                <a href="https://www.adobe.com/fr/products/premiere.html" target="_blank" className="name has-popup-link">
                  Premiere Pro
                </a>
              </div>
            </div>

            <div className="box-item f-remote">
              <div className="image">
                <a
                  href="https://learn.microsoft.com/fr-fr/windows/win32/termserv/remote-desktop-protocol"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/outils/remote/rdp.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Remote</div>
                <a href="https://learn.microsoft.com/fr-fr/windows/win32/termserv/remote-desktop-protocol" target="_blank" className="name has-popup-link">
                  RDP
                </a>
              </div>
            </div>

            <div className="box-item f-dev">
              <div className="image">
                <a
                  href="https://fr.react.dev/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/outils/dev/framework/react.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Dev</div>
                <a href="https://fr.react.dev/" target="_blank" className="name has-popup-link">
                  React
                </a>
              </div>
            </div>

            <div className="box-item f-cms">
              <div className="image">
                <a
                  href="https://www.shopify.com/fr"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/outils/cms/shopify.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">CMS</div>
                <a href="https://www.shopify.com/fr" target="_blank" className="name has-popup-link">
                  Shopify
                </a>
              </div>
            </div>

            <div className="box-item f-montage">
              <div className="image">
                <a
                  href="https://www.vegascreativesoftware.com/fr/vegas-pro/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/outils/montage/sonyvegas.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Montage Vidéo</div>
                <a href="https://www.vegascreativesoftware.com/fr/vegas-pro/" target="_blank" className="name has-popup-link">
                  Sony Vegas Pro
                </a>
              </div>
            </div>

            <div className="box-item f-collab">
              <div className="image">
                <a
                  href="https://fr.surveymonkey.com/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/outils/collab/surveymonkey.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Collaboration</div>
                <a href="https://fr.surveymonkey.com/" target="_blank" className="name has-popup-link">
                  SurveyMonkey
                </a>
              </div>
            </div>

            <div className="box-item f-dev">
              <div className="image">
                <a
                  href="https://svelte.dev/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/outils/dev/framework/svelte.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Dev / Framework</div>
                <a href="https://svelte.dev/" target="_blank" className="name has-popup-link">
                  Svelte
                </a>
              </div>
            </div>

            <div className="box-item f-erp">
              <div className="image">
                <a
                  href="https://www.sylob.com/fr"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/outils/erp/sylob.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">ERP</div>
                <a href="https://www.sylob.com/fr" target="_blank" className="name has-popup-link">
                  Sylob
                </a>
              </div>
            </div>

            <div className="box-item f-collab">
              <div className="image">
                <a
                  href="https://www.microsoft.com/fr-fr/microsoft-teams/group-chat-software"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/outils/collab/teams.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Collaboration</div>
                <a href="https://www.microsoft.com/fr-fr/microsoft-teams/group-chat-software" target="_blank" className="name has-popup-link">
                  Teams
                </a>
              </div>
            </div>

            <div className="box-item f-remote">
              <div className="image">
                <a
                  href="https://www.teamviewer.com/fr/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/outils/remote/teamviewer.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Remote</div>
                <a href="https://www.teamviewer.com/fr/" target="_blank" className="name has-popup-link">
                  Teamviewer
                </a>
              </div>
            </div>

            <div className="box-item f-collab">
              <div className="image">
                <a
                  href="https://trello.com/fr"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/outils/collab/trello.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Collaboration</div>
                <a href="https://trello.com/fr" target="_blank" className="name has-popup-link">
                  Trello
                </a>
              </div>
            </div>

            <div className="box-item f-dev">
              <div className="image">
                <a
                  href="https://www.typescriptlang.org/fr/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/outils/dev/typescript.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Dev</div>
                <a href="https://www.typescriptlang.org/fr/" target="_blank" className="name has-popup-link">
                  TypeScript
                </a>
              </div>
            </div>

            <div className="box-item f-hebergeur">
              <div className="image">
                <a
                  href="https://vercel.com/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/outils/hebergeur/vercel.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Hébergeur</div>
                <a href="https://vercel.com/" target="_blank" className="name has-popup-link">
                  Vercel
                </a>
              </div>
            </div>

            <div className="box-item f-dev">
              <div className="image">
                <a
                  href="https://code.visualstudio.com/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/outils/dev/vscode.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Dev</div>
                <a href="https://code.visualstudio.com/" target="_blank" className="name has-popup-link">
                  VS Code
                </a>
              </div>
            </div>

            <div className="box-item f-wiki">
              <div className="image">
                <a
                  href="https://js.wiki/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/outils/wiki/wikijs.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Wiki</div>
                <a href="https://js.wiki/" target="_blank" className="name has-popup-link">
                  WikiJ.js
                </a>
              </div>
            </div>

            <div className="box-item f-dev">
              <div className="image">
                <a
                  href="https://pcsoft.fr/windev/index.html"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/outils/dev/windev.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Dev</div>
                <a href="https://pcsoft.fr/windev/index.html" target="_blank" className="name has-popup-link">
                  Windev
                </a>
              </div>
            </div>

            <div className="box-item f-os">
              <div className="image">
                <a
                  href="https://www.microsoft.com/fr-fr/software-download/windows10"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/outils/os/Windows10.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">OS</div>
                <a href="https://www.microsoft.com/fr-fr/software-download/windows10" target="_blank" className="name has-popup-link">
                  Windows 10
                </a>
              </div>
            </div>

            <div className="box-item f-os">
              <div className="image">
                <a
                  href="https://www.microsoft.com/fr-fr/windows/windows-11"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/outils/os/Windows11.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">OS</div>
                <a href="https://www.microsoft.com/fr-fr/windows/windows-11" target="_blank" className="name has-popup-link">
                  Windows 11
                </a>
              </div>
            </div>

            <div className="box-item f-os">
              <div className="image">
                <a
                  href="https://www.microsoft.com/fr-fr/windows-server"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/outils/os/windows-server.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">OS</div>
                <a href="https://www.microsoft.com/fr-fr/windows-server" target="_blank" className="name has-popup-link">
                  Windows Server
                </a>
              </div>
            </div>            

            <div className="box-item f-cms">
              <div className="image">
                <a
                  href="https://wordpress.com/fr/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/outils/cms/wordpress.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">CMS</div>
                <a href="https://wordpress.com/fr/" target="_blank" className="name has-popup-link">
                  Wordpress
                </a>
              </div>
            </div>

            <div className="box-item f-collab">
              <div className="image">
                <a
                  href="https://xenforo.com/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/outils/collab/xenforo.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Collaboration</div>
                <a href="https://xenforo.com/" target="_blank" className="name has-popup-link">
                  Xenforo
                </a>
              </div>
            </div> 

            <div className="box-item f-tickets">
              <div className="image">
                <a
                  href="https://zammad.com/en"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/outils/tickets/zammad.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Tickets</div>
                <a href="https://zammad.com/en" target="_blank" className="name has-popup-link">
                  Zammad
                </a>
              </div>
            </div>

            <div className="box-item f-voip">
              <div className="image">
                <a
                  href="https://www.zoiper.com/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/outils/voip/zoiper.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">VoIP</div>
                <a href="https://www.zoiper.com/" target="_blank" className="name has-popup-link">
                  Zoiper
                </a>
              </div>
            </div> 

          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default Outils;