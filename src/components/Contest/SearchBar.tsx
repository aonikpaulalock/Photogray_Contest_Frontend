import { FaSearch } from "react-icons/fa";

const SearchBar = ({ setSearchTerm }: {
  setSearchTerm: React.Dispatch<React.SetStateAction<string | undefined>>
}) => {
  return (
    <div className="flex justify-center mb-14">
      <div className="relative w-full sm:w-1/2">
        <input
          type="text"
          placeholder="Search your contest" className="bg-[#f5eaee] pl-12 p-6 w-full outline-0 text-base placeholder-black font-poppins "
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FaSearch className="absolute left-5 top-7 text-gray-900" />
      </div>
      <button className="text-white px-14 py-6 bg-secondary">Search</button>
    </div>
  )
};

export default SearchBar;