export const SearchInput = () => {
  return (
    <div className="flex items-center mb-500 md:w-1/2 relative">
      <img src="/src/assets/search.svg" className="absolute left-500" alt="Search Icon" />
      <input
        type="text"
        placeholder="Search for a country..."
        className="w-full py-5 pl-18 lg:w-9/12 border border-none rounded-md dark:bg-blue-900 text-xs dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  )
}