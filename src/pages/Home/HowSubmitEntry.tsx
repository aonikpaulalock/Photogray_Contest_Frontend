import { FaUserCheck, FaSearch, FaClipboardList, FaPenFancy } from "react-icons/fa";
import Container from "../../components/Container/Container";
import HowSubmit from "../../assets/landingPage/HowApply.png";
import { motion } from "framer-motion";

const HowSubmitEntry = () => {
  return (
    <Container className="mb-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-32 gap-x-10 items-center p-6">

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <img src={HowSubmit} alt="Camera Image" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h4
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-[#81BAE3] mb-4"
          >
            Learn how you can apply
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-6 text-primary"
          >
            Easily to submit your entry
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-base font-light text-[#383885] mb-12"
          >
            Leo mi faucibus elit socios vitae nisi sed neque. Tortor diam arcu in facilisi vestibulum.
          </motion.p>

          <ul className="grid grid-cols-1 gap-4">
            <motion.li
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="flex items-start space-x-8 mb-8"
            >
              <span className="h-16 w-16 bg-[#f5eaee] flex justify-center items-center text-secondary">
                <FaUserCheck className="w-6 h-6" />
              </span>
              <div>
                <h3 className="text-2xl font-medium text-primary">Easy to sign up</h3>
                <p className="text-base font-light text-SecondPrimary mt-2">
                  Leo mi faucibus elit socios vitae nisi sed neque.
                </p>
              </div>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="flex items-start space-x-8 mb-8"
            >
              <span className="h-16 w-16 bg-[#f5eaee] flex justify-center items-center text-secondary">
                <FaSearch className="w-6 h-6" />
              </span>
              <div>
                <h3 className="text-2xl font-medium text-primary">Find your favorite contest</h3>
                <p className="text-base font-light text-SecondPrimary mt-2">
                  Leo mi faucibus elit socios vitae nisi sed neque.
                </p>
              </div>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="flex items-start space-x-8 mb-8"
            >
              <span className="h-16 w-16 bg-[#f5eaee] flex justify-center items-center text-secondary">
                <FaClipboardList className="w-6 h-6" />
              </span>
              <div>
                <h3 className="text-2xl font-medium text-primary">Flow the client requirements</h3>
                <p className="text-base font-light text-SecondPrimary mt-2">
                  Leo mi faucibus elit socios vitae nisi sed neque.
                </p>
              </div>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }} 
              className="flex items-start space-x-8 mb-8"
            >
              <span className="h-16 w-16 bg-[#f5eaee] flex justify-center items-center text-secondary">
                <FaPenFancy className="w-6 h-6" />
              </span>
              <div>
                <h3 className="text-2xl font-medium text-primary">Submit your unique entry</h3>
                <p className="text-base font-light text-SecondPrimary mt-2">
                  Leo mi faucibus elit socios vitae nisi sed neque.
                </p>
              </div>
            </motion.li>
          </ul>

          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 px-8 py-4 bg-primary text-white"
          >
            Load more
          </motion.button>
        </motion.div>
      </div>
    </Container>
  );
};

export default HowSubmitEntry;
