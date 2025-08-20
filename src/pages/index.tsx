import Layout from "@/components/layout";
import Seo from "@/components/seo";

function index() {
  return (
    <Layout>
      <Seo templateTitle="web view" siteName="Ocean" />

      <div>this is web view components</div>
    </Layout>
  );
}

export default index;
