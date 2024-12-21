import { BsThreeDots } from "react-icons/bs";

interface ContestDropdownProps {
  actions: {
    label: string,
    icon: JSX.Element, action: () => void
  }[];
  openDropdown: boolean;
  toggleDropdown: () => void;
  position: string;
}

const ContestDropdown = ({ actions, openDropdown, toggleDropdown, position }: ContestDropdownProps) => {
  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="text-gray-400 hover:text-gray-600 focus:outline-none"
      >
        <BsThreeDots className="text-xl" />
      </button>
      {openDropdown && (
        <div className={`absolute ${position} right-10 bg-white shadow-md rounded-lg w-36`}>
          <ul>
            {actions.map((action, idx) => (
              <li
                key={idx}
                className="flex items-center hover:bg-gray-100 cursor-pointer text-primary font-semibold py-2 px-2"
                onClick={action.action}
              >
                {action.icon} {action.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ContestDropdown;
