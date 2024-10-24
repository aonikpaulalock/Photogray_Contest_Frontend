
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



const FilterButtons = () => {
  return (
    <div className="flex justify-center space-x-12 mb-20">
      {
        filterCategory.map((category) => <button key={category} className="px-8 py-4 border-2 border-[#d0d5e0] rounded font-base font-medium text-[#b2b6be]">{category}</button>)
      }
      {/* <button className="px-4 py-2 bg-pink-400 text-white rounded">All</button> */}
    </div>
  )
};

export default FilterButtons;