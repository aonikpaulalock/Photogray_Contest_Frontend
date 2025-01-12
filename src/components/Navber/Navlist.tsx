import { HashLink } from "react-router-hash-link";

const Navlist = () => {
  return (
    <>
      <li className="cursor-pointer text-primary font-poppins font-semibold text-[16px] leading-normal">
        <HashLink smooth to="#home">
          Home
        </HashLink>
      </li>
      <li className="cursor-pointer text-SecondPrimary font-poppins font-medium text-[16px] leading-normal">
        <HashLink smooth to="#contest">
          Contest
        </HashLink>
      </li>
      <li className="cursor-pointer text-SecondPrimary font-poppins font-medium text-[16px] leading-normal">
        <HashLink smooth to="#how-submit-entry">
          How it's work
        </HashLink>
      </li>
      <li className="cursor-pointer text-SecondPrimary font-poppins font-medium text-[16px] leading-normal">
        <HashLink smooth to="#blogs">
          Articles
        </HashLink>
      </li>
    </>
  );
};

export default Navlist;
