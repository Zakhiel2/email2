const Apropos = () => {
    return (
      <div className="section apropos section_" id="a-propos">
        <div className="content">
          <div className="title">
            <div className="title_inner">A propos</div>
          </div>
          <div className="image">
            <img src="images/photo.jpg" alt="" />
          </div>
          <div className="desc">
            <p>
              Après 5 ans en tant que technicien software et hardware, <strong>je souhaite relever de nouveaux défis</strong>.
              <br/>
              Doué d'un parcours axé sur les nouvelles technologies et l'informatique de manière générale, mon expérience professionnelle m'a fait découvrir une nouvelle passion : Le <strong>Management</strong>.
              <br/>
              J'ai eu le plaisir de gérer en tant qu'adjoint un service de 15 personnes réparties sur 2 localisations différentes.
              <br/>
              Je reste <strong>disponible et à l'écoute pour toute offre intéressante</strong>.
            </p>
            <p>
              N'hésitez pas à me contacter !
            </p>
            <div className="info-list">
              <ul>
                <li>
                  <strong>Nom:</strong> Logan BOVET
                </li>
                <li>
                  <strong>Âge:</strong> 28 ans
                </li>
                <li>
                  <strong>Domaine:</strong> Informatique
                </li>
                <li>
                  <strong>Nationalité:</strong> Française
                </li>
                <li>
                  <strong>Résidence:</strong> 40430 Luxey
                </li>
                <li>
                  <strong>E-mail:</strong> logan.bovet@outlook.com
                </li>
              </ul>
            </div>
            <div className="bts">
              <a href="documents/CV_BOVET_Logan.pdf" download className="btn fill" data-text="Télécharger CV">
                    <span>Télécharger CV</span>
              </a>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    );
  };
  export default Apropos;
  