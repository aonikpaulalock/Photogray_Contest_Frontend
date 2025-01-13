import { motion } from "framer-motion";
import Container from "../../components/Container/Container";

const HeroSection = () => {
  return (
    <div className="bg-hero-pattern bg-cover bg-center h-screen">
      <Container>
        <div className="flex h-full items-center">
          <div className="text-white text-left">
            {/* Hero Section Heading Animation */}
            <motion.h1
              className="text-7xl font-bold mb-5"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeOut", duration: 1 }}
              viewport={{ once: true }}
            >
              Welcome to our
            </motion.h1>

            {/* Hero Section Subheading Animation */}
            <motion.h2
              className="text-7xl font-extrabold mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeOut", duration: 1.2, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Biggest Community
            </motion.h2>

            {/* Hero Section Description Animation */}
            <motion.p
              className="text-[16px] leading-8 font-poppins font-bold text-white mb-[58px]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeOut", duration: 1.4, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Photography is an art of teleporting the past into the future.
            </motion.p>

            {/* Hero Section Button Animation */}
            <motion.button
              className="btn btn-primary"
              initial={{ opacity: 0, scale: 1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ ease: "easeOut", duration: 1.5, delay: 0.6 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
            >
              Browse Contest
            </motion.button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
