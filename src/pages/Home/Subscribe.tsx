import { FaSearch } from "react-icons/fa";
import Container from "../../components/Container/Container";
import shape from "../../assets/landingPage/subcribe.png"
import shape2 from "../../assets/landingPage/subcribe2.png"
const Subscribe = () => {
  return (
    <div className="my-[128px]">
      <Container>
        <div className="bg-primary py-10 relative">
          {/* Top 3D Ring */}
          <div className="absolute top-0 left-0 transform -translate-x-14 -translate-y-20">
            <img src={shape} alt="3D Ring" className="w-[200px] h-[200px]" />
          </div>

          <div className="w-full text-center">
            <h2 className="text-4xl text-[#FEF6E4] font-semibold my-12">Subscribe to our Newsletter</h2>

            {/* Subscription Form */}
            <div className="flex justify-center mb-14 w-full">
              <div className="relative w-2/4 flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-[#435892] pl-12 p-6 outline-0 text-white placeholder-white font-poppins flex-grow"
                />
                <FaSearch className="absolute left-5 top-7 text-white" />
                <button className="text-primary font-semibold px-16 py-6 bg-[#FFC397]">Send</button>
              </div>
            </div>
          </div>

          {/* Bottom 3D Sphere */}
          <div className="absolute bottom-0 right-0 transform translate-x-2 translate-y-28">
            <img src={shape2} alt="3D Sphere" className="w-[78px] h-[78px]" />
          </div>
        </div>
      </Container>
    </div>
  )
};

export default Subscribe;