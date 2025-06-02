import RegionFilter from "../components/RegionFilter";
import { SearchInput } from "../components/SearchInput";

export const MainPage = () => {
  return (
    <>
      <div className="flex flex-col py-300 px-200 gap-2 mb-400 md:flex-row md:justify-between md:items-center md:px-500 lg:px-1000">
        <div className="w-full md:flex-1 md:max-w-md mb-500 md:mb-0">
          <SearchInput />
        </div>
        <div className="w-1/2 md:w-80 md:ml-auto lg:w-96">
          <RegionFilter />
        </div>
      </div>
    </>
  );
};
