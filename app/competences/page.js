import PageBanner from "@/components/PageBanner";
import Competences from "@/components/Competences";
import Layout from "@/layouts/Layout";

import dynamic from "next/dynamic";
const Outils = dynamic(() => import("@/components/Outils"), {
    ssr: false,
  });

const CompetencesPage = () => {
  return (
    <Layout>
      <PageBanner pageLink={"/competences"} pageName={"Compétences"} />
      <Competences />
      <Outils />
    </Layout>
  );
};
export default CompetencesPage;
