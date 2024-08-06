import Apropos from "@/components/Apropos";
import PageBanner from "@/components/PageBanner";
import Services from "@/components/Services";
import Competences from "@/components/Competences";
import Layout from "@/layouts/Layout";

import dynamic from "next/dynamic";
const Clients = dynamic(() => import("@/components/Clients"), {
  ssr: false,
});

const Profil = () => {
  return (
    <Layout>
      <PageBanner pageLink={"profil"} pageName={"Profil"} />
      <Apropos />
      <Competences />
      <Services />
      <Clients />
    </Layout>
  );
};
export default Profil;
