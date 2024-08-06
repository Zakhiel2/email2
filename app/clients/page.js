import PageBanner from "@/components/PageBanner";
import GlitcheLayout from "@/layouts/Layout";

import dynamic from "next/dynamic";
const Clients = dynamic(() => import("@/components/Clients"), {
  ssr: false,
});

const ClientsPage = () => {
  return (
    <GlitcheLayout>
      <PageBanner pageLink={"/clients"} pageName={"Clients"} />
      <Clients />
    </GlitcheLayout>
  );
};
export default ClientsPage;
