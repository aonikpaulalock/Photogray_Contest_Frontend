import ScrollProgressLine from "../../components/Animation/ScrollProgressLine";
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
       <ScrollProgressLine />
      <div id="home">
        <HeroSection />
      </div>
      <Achievements />
      <div id="contest">
        <Contest />
      </div>
      <div id="how-submit-entry">
        <HowSubmitEntry />
      </div>
      <Partners />
      <BuildBrightFuture />
      <div id="blogs">
        <Blogs />
      </div>
      <Subscribe />
    </>
  )
};

export default Home;