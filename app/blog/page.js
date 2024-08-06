import PageBanner from "@/components/PageBanner";
import Layout from "@/layouts/Layout";

import dynamic from "next/dynamic";
const Blog = dynamic(() => import("@/components/Blog"), {
  ssr: false,
});

const BlogPage = () => {
  return (
    <Layout>
      <PageBanner pageLink={"blog"} pageName={"Blog"} />
      <Blog />
    </Layout>
  );
};
export default BlogPage;
