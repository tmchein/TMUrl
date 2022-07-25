import type { NextPage } from "next";
import ListOfLinks from "../components/ListOfLinks";
import Layout from "../layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <ListOfLinks />
    </Layout>
  );
};

export default Home;
