
const DahboardHeader = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-transparent">
      <input
        type="text"
        placeholder="Search here..."
        className="border rounded-lg p-2 w-1/3 text-gray"
      />
      <div className="flex items-center gap-4">
        <span className="text-gray text-xl">🔔</span>
        <span className="text-darkBlue font-medium">Madison Eve</span>
      </div>
    </div>
  )
};

export default DahboardHeader;