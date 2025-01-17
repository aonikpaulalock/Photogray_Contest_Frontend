import { useState } from "react";

const filterCategory = [
  "All",
  "Nature",
  "Hills",
  "Model",
  "Product",
  "3d",
  "Fashion",
  "Others"
]

const FilterButtons = ({ setFilter }: {
  setFilter: React.Dispatch<React.SetStateAction<string | undefined>>
}) => {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const handleClick = (category: string) => {
    setActiveFilter(category);
    setFilter(category === "All" ? undefined : category);
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-x-6 gap-y-3 mb-20">
      {
        filterCategory.map((category) => <button key={category}
          className={`px-8 py-4 border-2 border-[#d0d5e0] rounded font-base font-medium text-[#b2b6be] ${activeFilter === category ? "bg-secondary text-white border-none" : ""
            }`}
          onClick={() => handleClick(category)}
        >{category}</button>)
      }
    </div>
  )
};

export default FilterButtons;