import { FaUserCheck, FaSearch, FaClipboardList, FaPenFancy } from "react-icons/fa"
import Container from "../../components/Container/Container";
import HowSubmit from "../../assets/landingPage/HowApply.png"
const HowSubmitEntry = () => {
  return (
    <div className="mb-32">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-32 items-center p-6">
          {/* Left side (Image) */}
          <div>
            <img src={HowSubmit} alt="Camera Image" />
          </div>

          {/* Right side (Text Content) */}
          <div>
            <h4 className="text-2xl font-bold text-[#81BAE3] mb-4" >Learn how you can apply</h4>
            <h2 className="text-4xl font-bold mb-6 text-primary">Easily to submit your entry</h2>
            <p className="text-base font-light text-[#383885] mb-12">
              Leo mi faucibus elit socios vitae nisi sed neque. Tortor diam arcu in facilisi vestibulum.
            </p>

            {/* Grid List for the Steps */}
            <ul className="grid grid-cols-1 gap-4">
              <li className="flex items-start space-x-8 mb-8">
                <span className="h-16 w-16 bg-[#f5eaee] flex justify-center items-center text-secondary">
                  <FaUserCheck className="w-6 h-6" />
                </span>
                <div>
                  <h3 className="text-2xl font-medium text-primary">Easy to sign up</h3>
                  <p className="text-base font-light text-SecondPrimary mt-2">Leo mi faucibus elit socios vitae nisi sed neque.</p>
                </div>
              </li>

              <li className="flex items-start space-x-8 mb-8">
                <span className="h-16 w-16 bg-[#f5eaee] flex justify-center items-center text-secondary">
                  <FaSearch className="w-6 h-6" />
                </span>
                <div>
                  <h3 className="text-2xl font-medium text-primary">Find your favorite contest</h3>
                  <p className="text-base font-light text-SecondPrimary mt-2">Leo mi faucibus elit socios vitae nisi sed neque.</p>
                </div>
              </li>

              <li className="flex items-start space-x-8 mb-8">
                <span className="h-16 w-16 bg-[#f5eaee] flex justify-center items-center text-secondary">
                  <FaClipboardList className="w-6 h-6" />
                </span>
                <div>
                  <h3 className="text-2xl font-medium text-primary">Flow the client requirements</h3>
                  <p className="text-base font-light text-SecondPrimary mt-2">Leo mi faucibus elit socios vitae nisi sed neque.</p>
                </div>
              </li>

              <li className="flex items-start space-x-8 mb-8">
                <span className="h-16 w-16 bg-[#f5eaee] flex justify-center items-center text-secondary">
                  <FaPenFancy className="w-6 h-6" />
                </span>
                <div>
                  <h3 className="text-2xl font-medium text-primary">Submit your unique entry</h3>
                  <p className="text-base font-light text-SecondPrimary mt-2">Leo mi faucibus elit socios vitae nisi sed neque.</p>
                </div>
              </li>
            </ul>

            {/* Load More Button */}
            <button className="mt-16 px-8 py-4 bg-primary text-white ">
              Load more
            </button>
          </div>
        </div>
      </Container>
    </div>
  )
};

export default HowSubmitEntry;