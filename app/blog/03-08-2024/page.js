import Layout from "@/layouts/Layout";
import Link from "next/link";

const Article03082024 = () => {
  return (
    <Layout>
      <div className="section started" style={{ height: "96vh" }}>
        <div className="centrize full-width">
          <div className="vertical-center">
            <div className="started-content">
              <div className="date">03 Août 2024</div>
              <div className="h-title blog_title">
                Ouverture du site
              </div>
              <div className="h-subtitle typing-bread">
                <p>
                  <Link href="/">Accueil</Link> / <Link href="/./blog">Blog</Link>
                </p>
              </div>
              <span className="typed-bread" />
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
              No dolorem blandit theophrastus eos, nam eu persecuti repudiandae,
              duo hinc vide aliquip et. Ex atqui voluptatibus eum, cu case
              intellegebat eum, mea ex regione patrioque signiferumque. Pri ei
              solet graecis. Ea appetere referrentur vituperatoribus cule, vix
              sanctus meliore cu. Nec in sale prima nostrud.
            </p>
            <p>
              <img src="images/blog_1.jpg" alt="" />
            </p>
            <p>
              Ex audire suavitate has, ei quodsi tacimates sapientem sed, pri
              zril ubique ut. Te cule tation munere noluisse. Enim torquatos ne
              pri, eum mollis salutandi corrumpit et, fugit apeirian duo ad. Ad
              oportere voluptatibus nec, sea ei civibus praesent. At timeam
              expetenda inciderint has. Invidunt constituto ne per, paulo omnium
              quaerendum his eu, cu congue consul cetero cule. Solet honestatis
              et eum. Euismod consulatu eos eu. Vocent facilis sensibus vel ut,
              quo an nihil qualisque. Mea eu nulla prompta. Dicat velit at usu,
              malis euismod vim an, tollit discere vix in. Ne his eros dolor. Cu
              illud lorem putent vel. Eum in movet nostrum referrentur. His ne
              tantas tractatos. Sit eu saperet antiopam.
            </p>
            <p>
              No dolorem blandit theophrastus eos, nam eu persecuti repudiandae,
              duo hinc vide aliquip et. Ex atqui voluptatibus eum, cu case
              intellegebat eum, mea ex regione patrioque signiferumque. Pri ei
              solet graecis. Ea appetere referrentur vituperatoribus cule, vix
              sanctus meliore cu. Nec in sale prima nostrud.
            </p>
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
export default Article03082024;
