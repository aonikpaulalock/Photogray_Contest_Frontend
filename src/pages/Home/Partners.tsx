import { motion } from "framer-motion"; // Import framer-motion for animations
import Marquee from "react-fast-marquee";
import Container from "../../components/Container/Container";
import { partnersLogos } from "../../components/Partners/PartnerLogos";
import shape from "../../assets/landingPage/shape.png";

const Partners = () => {
  return (
      <Container className="mb-40 sm:p-0 p-2">
        <div className="text-center mb-9">
          <div className="mb-5">
            <p className="mb-1 text-base font-bold text-[#81BAE3]">Clients</p>
            <motion.img
              src={shape}
              alt=""
              className="mx-auto"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeOut", duration: 1 }}
              viewport={{ once: true }} 
            />
          </div>
          <motion.h1
            className="text-4xl font-bold text-primary mt-1"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 1 }}
            viewport={{ once: true }}
          >
            Meet our trusted partners
          </motion.h1>
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
                <div className="flex justify-center">
                  <img src={logo.img} alt="" className="me-8" />
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </Container>
  );
};

export default Partners;
