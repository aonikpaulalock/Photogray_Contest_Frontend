import Container from "../../components/Container/Container";
import image from "../../assets/landingPage/BrightFuture.png"
import circleFuture from "../../assets/landingPage/CircleBrightFuture.png"
import circleFuture2 from "../../assets/landingPage/brightCircle.png"
import threeDot from "../../assets/landingPage/threeDot.png"
import pattern from "../../assets/landingPage/BrightFuturePattern.png"
const BuildBrightFuture = () => {
  return (
    <div className="my-36">
      <Container>
        <div className="bg-primary relative">
          <div className="flex items-center">

            {/* Left Section - Text */}
            <div className="">
              <div className="w-9/12 mx-auto">
                <h1 className="text-[55px] text-[#FEF6E4] leading-[70px] font-bold my-6">
                  Build your bright future
                </h1>
                <p className="text-base font-thin  text-white mt-6 mb-10">
                  Leo mi faucibus elit sociis vitae nisi sed neque. Tortor diam arcu in facilisi vestibulum.
                </p>
                <button className="bg-[#FFC397] py-3 px-6 text-primary text-base font-bold">
                  Meet our expert
                </button>
              </div>
            </div>

            {/* Right Section - Image */}
            <div className="relative  md:w-1/2 flex justify-end">
              <img src={circleFuture} alt="" className="absolute right-0" />
              <img src={circleFuture2} alt="" className="absolute bottom-[11%] right-2/4" />
              <img
                src={image}
                alt="Photographer"
                className="relative z-10 h-auto object-cover mt-[-64px]"
              />
            </div>
          </div>
          <img src={threeDot} alt="" className="absolute bottom-[-5%] left-[-2%] w-24 h-24" />
          <img src={pattern} alt="" className="absolute bottom-[-7%] left-[-4%] z-[-1]" />
        </div>
      </Container>
    </div>
  )
};

export default BuildBrightFuture;