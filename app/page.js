import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Competences from "@/components/Competences";
import Layout from "@/layouts/Layout";
import ContactsInfo from "@/components/ContactsInfo";

import dynamic from "next/dynamic";
const ClientsHome = dynamic(() => import("@/components/ClientsHome"), {
  ssr: false,
});
const Outils = dynamic(() => import("@/components/Outils"), {
  ssr: false,
});
const Blog = dynamic(() => import("@/components/Blog"), {
  ssr: false,
});


import Apropos from "@/components/Apropos";

const Page = () => {
  return (
    <Layout onepage={true}>
      <Hero mouse={true} />
      <Apropos />
      <ClientsHome />      
      <Competences />
      <Services />
      <Outils />
      <Blog />
      <ContactsInfo />
    </Layout>
  );
};
export default Page;
