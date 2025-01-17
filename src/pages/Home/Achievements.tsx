import { motion } from "framer-motion"; // Import framer-motion for animations
import Container from "../../components/Container/Container";
import shape from "../../assets/landingPage/shape.png";

const Achievements = () => {
  return (
    <Container className="my-[120px]">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-4">
        {/* Heading Section */}
        <div className="text-center lg:text-left lg:my-6 lg:col-span-1 flex flex-col justify-center items-center lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 1 }}
            viewport={{ once: true }}
            className="mb-2"
          >
            <p className="mb-1 text-base font-bold text-[#81BAE3]">Let's something about us</p>
            <img src={shape} alt="decorative shape" />
          </motion.div>
          <motion.h1
            className="text-3xl md:text-4xl leading-[45px] font-bold text-[#001858] mb-6 lg:mb-10"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our Achievements
          </motion.h1>
          <motion.button
            className="btn btn-secondary"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Load More
          </motion.button>
        </div>

        {/* Counters Section */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-primary text-[#fef6e4] py-[60px] lg:py-[94px] px-6 lg:px-10">
          {[
            { value: "200+", label: "Running contest" },
            { value: "16126", label: "Happy Clients" },
            { value: "3k", label: "Photography Expert" },
            { value: "30k", label: "Completed Contests" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="relative text-center p-4 border border-[#ffffff30] rounded"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                ease: "easeOut",
                duration: 1,
                delay: 0.5 + index * 0.1,
              }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold">{item.value}</h2>
              <p className="text-[16px] font-semibold mt-2">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Achievements;
