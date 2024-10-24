import { IStateProps } from "../../types";

const Menubar = ({
  isMenuOpen,
  setIsMenuOpen
}: IStateProps) => {
  return (
    <button
      className="block md:hidden focus:outline-none"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 font-bold"
        fill="#F582AE"
        viewBox="0 0 24 24"
        stroke="#F582AE"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
        />
      </svg>
    </button>
  )
};

export default Menubar;