import { motion } from "framer-motion";
import Container from "../../components/Container/Container";

const HeroSection = () => {
  return (
    <div className="bg-hero-pattern bg-cover bg-center h-[450px] sm:h-[620px] sm:px-0 px-2">
      <Container>
        <div className="flex h-full items-center">
          <div className="text-white text-center sm:text-left px-4">
            {/* Hero Section Heading Animation */}
            <motion.h1
              className="text-4xl sm:text-6xl md:text-7xl font-bold sm:mb-5 mb-3"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeOut", duration: 1 }}
              viewport={{ once: true }} // Animation will run only once
            >
              Welcome to our
            </motion.h1>

            {/* Hero Section Subheading Animation */}
            <motion.h2
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold sm:mb-10 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeOut", duration: 1.2, delay: 0.2 }}
              viewport={{ once: true }} // Animation will run only once
            >
              Biggest Community
            </motion.h2>

            {/* Hero Section Description Animation */}
            <motion.p
              className="text-sm sm:text-base md:text-lg leading-8 font-poppins font-bold text-white sm:mb-10 mb-5"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeOut", duration: 1.4, delay: 0.4 }}
              viewport={{ once: true }} // Animation will run only once
            >
              Photography is an art of teleporting the past into the future.
            </motion.p>

            {/* Hero Section Button Animation */}
            <motion.button
              className="btn btn-primary py-4 px-8 text-sm sm:text-base"
              initial={{ opacity: 0, scale: 1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ ease: "easeOut", duration: 1.5, delay: 0.6 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }} // Animation will run only once
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
