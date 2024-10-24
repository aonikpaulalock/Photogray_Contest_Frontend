import Achievements from "./Achievements";
import Blogs from "./Blogs";
import BuildBrightFuture from "./BuildBrightFuture";
import Contest from "./Contest";
import HeroSection from "./HeroSection";
import HowSubmitEntry from "./HowSubmitEntry";
import Partners from "./Partners";
import Subscribe from "./Subscribe";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Achievements />
      <Contest />
      <HowSubmitEntry />
      <Partners />
      <BuildBrightFuture />
      <Blogs />
      <Subscribe />
    </>
  )
};

export default Home;