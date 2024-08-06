import Link from 'next/link';
import Layout from "@/layouts/Layout";

export default function NotFound() {
  return (
  <Layout>
  <div className="section started" style={{ height: "96vh" }}>
    <div className="centrize full-width">
      <div className="vertical-center">
        <div className="started-content">
          <div className="h-title glitch-effect" data-text="404">
            <span>404</span>
          </div>
          <div className="h-title glitch-effect" data-text="Page non trouvée">
            <span>Page non trouvée</span>
          </div>          
          <Link href="/">Retourner à l'accueil</Link>
        </div>
      </div>
    </div>
  </div>
  </Layout>
  );
};
