interface SearchInputProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export const SearchInput = ({
  searchTerm,
  onSearchChange,
}: SearchInputProps) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };

  return (
    <div className="relative">
      <img
        src="/src/assets/search.svg"
        className="absolute left-500 top-1/2 transform -translate-y-1/2 w-4 h-4"
        alt="Search Icon"
      />
      <input
        type="text"
        placeholder="Search for a country..."
        className="py-4 pl-18 pr-6 rounded-md dark:bg-blue-900 w-full bg-white text-sm dark:text-white text-gray-900 border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};
