import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSaller from "../components/BestSaller";
import OurPolicy from "../components/OurPolicy";
import NewsLetter from "../components/NewsLetter";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSaller />
      <OurPolicy />
      <NewsLetter />
    </div>
  );
};

export default Home;
