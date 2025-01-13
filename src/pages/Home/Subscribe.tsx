import { FaSearch } from "react-icons/fa";
import Container from "../../components/Container/Container";
import shape from "../../assets/landingPage/subcribe.png";
import shape2 from "../../assets/landingPage/subcribe2.png";
import { motion } from "framer-motion"; // Import Framer Motion for animation

const Subscribe = () => {
  return (
    <div className="my-[128px]">
      <Container>
        <div className="bg-primary py-10 relative">
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 2 }}
            transition={{ duration: 1 }}
            className="absolute top-0 left-0 transform -translate-x-14 -translate-y-20"
          >
            <img src={shape} alt="3D Ring" className="w-[200px] h-[200px]" />
          </motion.div>

          <div className="w-full text-center">

            <motion.h2
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-4xl text-[#FEF6E4] font-semibold my-12"
            >
              Subscribe to our Newsletter
            </motion.h2>

            <div className="flex justify-center mb-14 w-full">
              <motion.div
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="relative w-2/4 flex"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-[#435892] pl-12 p-6 outline-0 text-white placeholder-white font-poppins flex-grow"
                />
                <FaSearch className="absolute left-5 top-7 text-white" />
                <button className="text-primary font-semibold px-16 py-6 bg-[#FFC397]">
                  Send
                </button>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }} // Transition time
            className="absolute bottom-0 right-0 transform translate-x-2 translate-y-28"
          >
            <img src={shape2} alt="3D Sphere" className="w-[78px] h-[78px]" />
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default Subscribe;

