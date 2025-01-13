import { motion } from "framer-motion";
import Container from "../../components/Container/Container";
import image from "../../assets/landingPage/BrightFuture.png";
import circleFuture from "../../assets/landingPage/CircleBrightFuture.png";
import circleFuture2 from "../../assets/landingPage/brightCircle.png";
import threeDot from "../../assets/landingPage/threeDot.png";
import pattern from "../../assets/landingPage/BrightFuturePattern.png";

const BuildBrightFuture = () => {
  return (
    <div className="my-36">
      <Container>
        <motion.div
          className="bg-primary relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }} // Allow animation to trigger on every scroll
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeInOut" } },
          }}
        >
          {/* Flex Container */}
          <motion.div
            className="flex items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
              hidden: {},
            }}
          >
            {/* Left Section - Text */}
            <motion.div
              className=""
              variants={{
                visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeInOut" } },
                hidden: { opacity: 0, x: -50 },
              }}
            >
              <div className="w-9/12 mx-auto">
                <h1 className="text-[55px] text-[#FEF6E4] leading-[70px] font-bold my-6">
                  Build your bright future
                </h1>
                <p className="text-base font-thin text-white mt-6 mb-10">
                  Leo mi faucibus elit sociis vitae nisi sed neque. Tortor diam arcu in facilisi vestibulum.
                </p>
                <motion.button
                  className="bg-[#FFC397] py-3 px-6 text-primary text-base font-bold"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Meet our expert
                </motion.button>
              </div>
            </motion.div>

            {/* Right Section - Image */}
            <motion.div
              className="relative md:w-1/2 flex justify-end"
              variants={{
                visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: "easeInOut" } },
                hidden: { opacity: 0, x: 50 },
              }}
            >
              <img src={circleFuture} alt="" className="absolute right-0" />
              <img src={circleFuture2} alt="" className="absolute bottom-[11%] right-2/4" />
              <img
                src={image}
                alt="Photographer"
                className="relative z-10 h-auto object-cover mt-[-64px]"
              />
            </motion.div>
          </motion.div>

          {/* Decorative Elements */}
          <motion.img
            src={threeDot}
            alt=""
            className="absolute bottom-[-5%] left-[-2%] w-24 h-24"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.8, duration: 0.6, ease: "easeInOut" }}
          />
          <motion.img
            src={pattern}
            alt=""
            className="absolute bottom-[-7%] left-[-4%] z-[-1]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 1, duration: 0.8, ease: "easeInOut" }}
          />
        </motion.div>
      </Container>
    </div>
  );
};

export default BuildBrightFuture;
