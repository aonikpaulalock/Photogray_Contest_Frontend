import Marquee from "react-fast-marquee";
import Container from "../../components/Container/Container";
import { partnersLogos } from "../../components/Partners/PartnerLogos";
import shape from "../../assets/landingPage/shape.png"
const Partners = () => {
  return (
    <div className="mb-40">
      <Container>
        <div className="text-center mb-9">
          <div className="mb-5">
            <p className="mb-1 text-base font-bold text-[#81BAE3]">Clients</p>
            <img src={shape} alt="" className="mx-auto" />
          </div>
          <h1 className="text-4xl font-bold text-primary mt-1">Meet our trusted partners</h1>
        </div>
        <div className="w-10/12 mx-auto">
          <Marquee
            gradient={true}
            speed={40}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
            gradientWidth={150}
          >
            {partnersLogos.map((logo) => (
              <div className="grid grid-cols-1" key={logo.id}>
                <div className="">
                  <img src={logo.img} alt="" className="me-8" />
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </Container>
    </div>
  )
};

export default Partners;