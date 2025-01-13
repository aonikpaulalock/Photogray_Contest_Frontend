import { motion } from "framer-motion"; // Import framer-motion for animations
import Container from "../../components/Container/Container";
import shape from "../../assets/landingPage/shape.png";

const Achievements = () => {
  return (
    <div className="my-[120px]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="text-left md:my-6">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}  // Added whileInView to trigger animation on scroll
              transition={{ ease: "easeOut", duration: 1 }}
              viewport={{ once: true }}  // Ensures animation happens only once
              className="mb-2"
            >
              <p className="mb-1 text-base font-bold text-[#81BAE3]">Let's something about us</p>
              <img src={shape} alt="" />
            </motion.div>
            <motion.h1
              className="text-4xl leading-[45px] font-bold text-[#001858] mb-10"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}  // Added whileInView to trigger animation on scroll
              transition={{ ease: "easeOut", duration: 1, delay: 0.2 }}
              viewport={{ once: true }}  // Ensures animation happens only once
            >
              Our Achievements
            </motion.h1>
            <motion.button
              className="btn btn-secondary"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}  // Added whileInView to trigger animation on scroll
              transition={{ ease: "easeOut", duration: 1, delay: 0.4 }}
              viewport={{ once: true }}  // Ensures animation happens only once
            >
              Load More
            </motion.button>
          </div>

          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 bg-primary text-[#fef6e4] py-[94px] px-[55px] items-center">
            <motion.div
              className="relative text-center custom-border p-1"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}  // Added whileInView to trigger animation on scroll
              transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}
              viewport={{ once: true }}  // Ensures animation happens only once
            >
              <h2 className="text-4xl leading-[45px] font-bold">200+</h2>
              <p className="text-[16px] leading-[45px] font-bold">Running contest</p>
            </motion.div>
            <motion.div
              className="relative text-center custom-border p-2"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}  // Added whileInView to trigger animation on scroll
              transition={{ ease: "easeOut", duration: 1, delay: 0.6 }}
              viewport={{ once: true }}  // Ensures animation happens only once
            >
              <h2 className="text-4xl leading-[45px] font-bold">16126</h2>
              <p className="text-[16px] leading-[45px] font-bold">Happy Clients</p>
            </motion.div>
            <motion.div
              className="relative text-center custom-border p-2"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}  // Added whileInView to trigger animation on scroll
              transition={{ ease: "easeOut", duration: 1, delay: 0.7 }}
              viewport={{ once: true }}  // Ensures animation happens only once
            >
              <h2 className="text-4xl leading-[45px] font-bold">3k</h2>
              <p className="text-[16px] leading-[45px] font-bold">Photography Expert</p>
            </motion.div>
            <motion.div
              className="relative text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}  // Added whileInView to trigger animation on scroll
              transition={{ ease: "easeOut", duration: 1, delay: 0.8 }}
              viewport={{ once: true }}  // Ensures animation happens only once
            >
              <h2 className="text-4xl leading-[45px] font-bold">30k</h2>
              <p className="text-[16px] leading-[45px] font-bold">Completed Contests</p>
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Achievements;
