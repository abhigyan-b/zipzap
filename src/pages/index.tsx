import { Home } from "@zipzap/components/home";

const HomePage = () => <Home />;

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

export default HomePage;
