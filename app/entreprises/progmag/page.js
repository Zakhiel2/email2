import Layout from "@/layouts/Layout";
import Link from "next/link";
const BlogInner = () => {
  return (
    <Layout>
      <div className="section started" style={{ height: "96vh" }}>
        <div className="centrize full-width">
          <div className="vertical-center">
            <div className="started-content">
              <div className="date">Janvier 2019 - Février 2021</div>
              <div className="h-title blog_title">
                Première expérience chez
                <p>
                <a href="https://www.progmag.com/" target="_blank"><img src="/images/entreprises/progmag.png" alt="ProGmag" /></a>
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
              ProGmag, c'est une solution logicielle pour tout magasin ! De la caisse à la comptabilité en passant par la gestion de stock ou encore la fidélité, tout est pris en charge pour qu'un commerçant démarre
              sa journée sereinement. Plusieurs gammes sont proposées suivant le domaine d'activité.    
            </p>
            <p>
              <img src="/images/entreprises/caisse_progmag.png" alt="" />
            </p>
            <p>
              C'est dans cette entreprise que j'ai pu faire mes débuts dans le monde professionnel. Venant d'un cursus développement logiciel, j'ai rapidement compris de par des stages qu'il y a un fossé entre les utilisateurs finaux et les développeurs. 
              Je souhaite alors rejoindre pour une première expérience un service support pour interagir avec les clients et comprendre les différences de langage entre ces derniers et les développeurs.
            </p>
            <p>
              Mes missions étaient enrichissantes :
            </p>
        <div className="listing list">
          <ul>
            <li>
              <div className="name">Prendre en charge, prioriser, solutionner et capitaliser les problèmes techniques.</div>
            </li>
            <li>
              <div className="name">Installer ou mettre à jour le logiciel et le matériel à distance ou sur site.</div>
            </li>
            <li>
              <div className="name">Former les clients à distance ou sur site (utilisateurs et responsables techniques).</div>
            </li>
            <li>
              <div className="name">Prise en charge des urgences absolues (ex : Magasin bloqué).</div>
            </li>
            <li>
              <div className="name">Gérer les prestations hors contrat : Nettoyage de base de données, création de scripts spécifiques, …</div>
            </li>
            <li>
              <div className="name">Maintenir, créer et améliorer des outils d'aide à la gestion du service (ticketing, standard téléphonique, reporting, …).</div>
            </li>
            <li>
              <div className="name">Tester et valider les versions logicielles en interne avant distribution.</div>
            </li>
            <li>
              <div className="name">En l'absence du Responsable Support : Gérer et animer le service support (15 personnes, France et Tunisie).
                <br/>- Suivi et amélioration de la qualité de service ;
                <br/>- Vérification du respect des procédures ;
                <br/>- Elaboration et la vérification des indicateurs d'activité des collaborateurs ;
                <br/>- Planification des ressources ;
                <br/>- Analyse de la satisfaction client.
              </div>
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
                    Une montée en compétences rapide et la confirmation de ma passion pour le domaine logiciel. 
                    <br/>Je remercie ProGmag de toutes les découvertes dont j'ai bénéficié grâce à eux. 
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
