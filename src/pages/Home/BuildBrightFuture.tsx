import { motion } from "framer-motion";
import Container from "../../components/Container/Container";
import image from "../../assets/landingPage/BrightFuture.png";
import circleFuture from "../../assets/landingPage/CircleBrightFuture.png";
import circleFuture2 from "../../assets/landingPage/brightCircle.png";
import threeDot from "../../assets/landingPage/threeDot.png";
import pattern from "../../assets/landingPage/BrightFuturePattern.png";

const BuildBrightFuture = () => {
  return (
    <Container className="my-36">
      <motion.div
        className="bg-primary relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeInOut" } },
        }}
      >

        <motion.div
          className="flex flex-col md:flex-row items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
            hidden: {},
          }}
        >
 
          <motion.div
            className="w-full md:w-1/2 px-6 md:px-12"
            variants={{
              visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeInOut" } },
              hidden: { opacity: 0, x: -50 },
            }}
          >
            <h1 className="text-[40px] md:text-[55px] text-[#FEF6E4] leading-tight md:leading-[70px] font-bold my-6">
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
          </motion.div>

          <motion.div
            className="relative w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0"
            variants={{
              visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: "easeInOut" } },
              hidden: { opacity: 0, x: 50 },
            }}
          >
            <img src={circleFuture} alt="" className="absolute right-0 hidden md:block" />
            <img
              src={circleFuture2}
              alt=""
              className="absolute bottom-[11%] md:right-2/4 hidden md:block"
            />
            <img
              src={image}
              alt="Photographer"
              className="relative z-10 h-auto object-cover mt-[-40px] md:mt-[-64px] w-[80%] md:w-auto"
            />
          </motion.div>
        </motion.div>

        <motion.img
          src={threeDot}
          alt=""
          className="absolute bottom-[-5%] left-[-2%] w-16 h-16 md:w-24 md:h-24"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.8, duration: 0.6, ease: "easeInOut" }}
        />
        <motion.img
          src={pattern}
          alt=""
          className="absolute bottom-[-7%] left-[-4%] z-[-1] w-[70%] md:w-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 1, duration: 0.8, ease: "easeInOut" }}
        />
      </motion.div>
    </Container>
  );
};

export default BuildBrightFuture;
