import PageBanner from "@/components/PageBanner";
import Layout from "@/layouts/Layout";

import dynamic from "next/dynamic";
const Outils = dynamic(() => import("@/components/Outils"), {
  ssr: false,
});

const OutilsPage = () => {
  return (
    <Layout>
      <PageBanner pageName={"Outils"} pageLink={"/outils"} />
      <Outils />
    </Layout>
  );
};
export default OutilsPage;
