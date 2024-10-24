import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGoogle, FaYoutube } from "react-icons/fa";
import Container from "../Container/Container";
import FooterLogo from "../../assets/landingPage/footerLogo.png"
const Footer = () => {
  return (
    <footer className="bg-[#F9F9F9]">
      <Container>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-8 px-4 md:px-0 py-20 ">
          {/* First Column (Logo) */}
          <div className="sm:flex sm:items-center sm:justify-center">
            <img src={FooterLogo} alt="" />
          </div>

          {/* Second Column */}
          <div className="flex justify-start">
            <ul className="space-y-4">
              <li><a href="#" className="text-base text-primary font-medium font-poppins">Home</a></li>
              <li><a href="#" className="text-base text-SecondPrimary font-normal font-poppins">Contest</a></li>
              <li><a href="#" className="text-base text-SecondPrimary font-normal font-poppins">How it’s work</a></li>
              <li><a href="#" className="text-base text-SecondPrimary font-normal font-poppins">Articles</a></li>
              <li><a href="#" className="text-base text-SecondPrimary font-normal font-poppins">About us</a></li>
            </ul>
          </div>

          {/* Third Column */}
          <div className="flex justify-start">
            <ul className="space-y-4">
              <li><a href="#" className="text-base text-SecondPrimary font-normal font-poppins">Privacy</a></li>
              <li><a href="#" className="text-base text-SecondPrimary font-normal font-poppins">Terms and Conditions</a></li>
              <li><a href="#" className="text-base text-SecondPrimary font-normal font-poppins">Supports</a></li>
              <li><a href="#" className="text-base text-SecondPrimary font-normal font-poppins">FAQ</a></li>
              <li><a href="#" className="text-base text-SecondPrimary font-normal font-poppins">Expart</a></li>
            </ul>
          </div>

          {/* Fourth Column */}
          <div className="flex justify-start">
            <ul className="space-y-4">
              <li><a href="#" className="text-base text-SecondPrimary font-normal font-poppins">Team</a></li>
              <li><a href="#" className="text-base text-SecondPrimary font-normal font-poppins">Photographer</a></li>
              <li><a href="#" className="text-base text-SecondPrimary font-normal font-poppins">Hire</a></li>
              <li><a href="#" className="text-base text-SecondPrimary font-normal font-poppins">Complien</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section for Social Icons */}
        <div className="pb-16 flex justify-end items-center">
          <p className="text-base leading-[45px] text-primary font-bold me-[30px]">Follow us on</p>
          <div className="flex justify-center space-x-8 text-gray-600 text-lg">
            <a href="#">
            <FaFacebookF className="hover:text-[#1877F2]" /></a>
            <a href="#"><FaTwitter className="hover:text-[#1DA1F2]" /></a>
            <a href="#"><FaLinkedinIn className="hover:text-[#0077B5]" /></a>
            <a href="#"><FaGoogle className="hover:text-[#F4B400]" /></a>
            <a href="#"><FaYoutube className="hover:text-[#FF0000]" /></a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;