import Layout from "@/layouts/Layout";
import Link from "next/link";
const BlogInner = () => {
  return (
    <Layout>
      <div className="section started" style={{ height: "96vh" }}>
        <div className="centrize full-width">
          <div className="vertical-center">
            <div className="started-content">
              <div className="date">Février 2021 - Avril 2024</div>
              <div className="h-title blog_title">
                Mon aventure chez
                <p>
                <a href="https://www.ipmfrance.fr/" target="_blank"><img src="/images/entreprises/ipm-fr.png" alt="IPM France" /></a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <a href="#" className="mouse_btn">
          <span className="ion ion-mouse" />
        </a>
      </div>
      {/* Blog */}
      <div className="section blog">
        <div className="content">
          <div className="single-post-text">
            <p>
              IPM France, c'est l'expert en bornes interactives : De la création des solutions à la digitalisation de l'offre et de services de ses clients.
              Une société avec plus de 15 ans d'expérience et 15 000 bornes déployées pour des clients de toutes tailles.
              C'est également une offre complète qui se renouvellement en permanence pour satisfaire les besoins de tous les domaines.
              Les bornes sont également créées en France !   
            </p>
            <p>
              <img src="/images/entreprises/bornes_ipm-fr.png" alt="" />
            </p>
            <p>
              C'est dans ce contexte que j'ai eu le plaisir de maintenir le parc de bornes pour de gros comptes, tels que : CNAF, CPAM, Société Générale, La Française des Jeux, et bien d'autres !
            </p>
            <p>
              Mes missions étaient diverses et nombreuses :
            </p>
        <div className="listing list">
          <ul>
            <li>
              <div className="name">Responsable projet : gestion, organisation et intermédiaire entre plusieurs intervenants, relation client, support client (CPAM, CNAF, Société Générale, …).</div>
            </li>
            <li>
              <div className="name">Prendre en charge, prioriser, solutionner et capitaliser les problèmes techniques.</div>
            </li>
            <li>
              <div className="name">Gérer le parc de bornes interactives (sécurité, proactivité).</div>
            </li>
            <li>
              <div className="name">Installer le matériel à distance ou sur site.</div>
            </li>
            <li>
              <div className="name">Former les clients à distance ou sur site (utilisateurs et responsables techniques).</div>
            </li>
            <li>
              <div className="name">Gérer les litiges client et prestataire, définir des plans d'action de résolution.</div>
            </li>
            <li>
              <div className="name">Rédiger et mettre à jour les procédures de maintenance des produits référencés.</div>
            </li>
            <li>
              <div className="name">Maintenir et améliorer des outils d'aide à la gestion du service (ticketing, standard téléphonique, reporting, …).</div>
            </li>
            <li>
              <div className="name">Suppléant pilotage qualité ISO 9001 support (audit).</div>
            </li>
            <li>
              <div className="name">Aide au service SAV & Atelier : Réparation des matériels retournés, assemblage/démontage des bornes interactives.</div>
            </li>           
          </ul>
          </div>
          </div>
          <div className="post-comments">
            <div className="title">
              <div className="title_inner">AUTEUR</div>
            </div>
            <ul className="comments">
              <li className="post-comment">
                <div className="image">
                  <img src="/images/photo.jpg" alt="" />
                </div>
                <div className="desc">
                  <div className="name">Logan BOVET</div>
                  <p>
                    Je remercie IPM France pour la confiance qu'ils m'ont accordé. Une équipe humaine à l'écoute de ses salariés. Une entreprise qui se renouvelle en permanence afin de satisfaire tous ses partenaires. Une société qui m'aura permis d'améliorer mes connaissances hardware. 
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Layout>
  );
};
export default BlogInner;
