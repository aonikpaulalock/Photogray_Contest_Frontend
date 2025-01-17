import { FaSearch } from "react-icons/fa";
import Container from "../../components/Container/Container";
import shape from "../../assets/landingPage/subcribe.png";
import shape2 from "../../assets/landingPage/subcribe2.png";

const Subscribe = () => {
  return (
    // <Container >
    //   <div className="bg-primary  sm:px-0 px-4 py-10 relative">
    //     <motion.div
    //       initial={{ opacity: 1 }}
    //       animate={{ opacity: 2 }}
    //       transition={{ duration: 1 }}
    //       className="absolute top-0 left-0 transform -translate-x-14 -translate-y-20"
    //     >
    //       <img src={shape} alt="3D Ring" className="w-[200px] h-[200px]" />
    //     </motion.div>

    //     <div className="w-full text-center">

    //       <motion.h2
    //         whileInView={{ opacity: 1, x: 0 }}
    //         initial={{ opacity: 0, x: -100 }}
    //         transition={{ duration: 1, ease: "easeOut" }}
    //         className="text-4xl text-[#FEF6E4] font-semibold my-12"
    //       >
    //         Subscribe to our Newsletter
    //       </motion.h2>

    //       <div className="flex justify-center mb-14 w-full">
    //         <motion.div
    //           whileInView={{ opacity: 1 }}
    //           initial={{ opacity: 0 }}
    //           transition={{ duration: 1 }}
    //           className="relative w-full sm:w-2/4 sm:flex"
    //         >
    //           <input
    //             type="email"
    //             placeholder="Enter your email"
    //             className="bg-[#435892] pl-12 p-6 outline-0 text-white placeholder-white font-poppins flex-grow"
    //           />
    //           <FaSearch className="absolute left-5 top-7 text-white" />
    //           <button className="text-primary font-semibold px-16 py-6 bg-[#FFC397]">
    //             Send
    //           </button>
    //         </motion.div>
    //       </div>
    //     </div>

    //     <motion.div
    //       initial={{ opacity: 0 }}
    //       animate={{ opacity: 1 }}
    //       transition={{ duration: 1 }} // Transition time
    //       className="absolute bottom-0 right-0 transform translate-x-2 translate-y-28"
    //     >
    //       <img src={shape2} alt="3D Sphere" className="w-[78px] h-[78px]" />
    //     </motion.div>
    //   </div>
    // </Container>
          <Container className="my-[128px]">
          <div className="bg-primary py-10 px-6 md:px-0 relative">
  
            {/* Static Shape 1 */}
            <div className="absolute top-0 left-0 transform sm:-translate-x-14 sm:-translate-y-20 -translate-y-10">
              <img src={shape} alt="3D Ring" className="h-24 w-24 sm:w-[200px] sm:h-[200px]" />
            </div>
  
            <div className="w-full text-center">
  
              {/* Static Heading */}
              <h2 className="text-3xl sm:text-4xl text-[#FEF6E4] font-semibold my-12">
                Subscribe to our Newsletter
              </h2>
  
              {/* Input and Button */}
              <div className="flex justify-center mb-14 w-full">
                <div className="relative w-full md:w-2/4 md:flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-[#435892] pl-12 p-6 outline-0 text-white placeholder-white font-poppins flex-grow"
                  />
                  <FaSearch className="absolute left-5 top-7 text-white" />
                  <button className="text-primary font-semibold px-16 py-6 bg-[#FFC397] md:mt-0 mt-4">
                    Send
                  </button>
                </div>
              </div>
            </div>
  
            {/* Static Shape 2 */}
            <div className="absolute bottom-0 right-0 transform sm:translate-x-2 sm:translate-y-28 translate-y-10">
              <img src={shape2} alt="3D Sphere" className="w-16 h-16 sm:w-[78px] sm:h-[78px]" />
            </div>
          </div>
        </Container>
  );
};

export default Subscribe;

