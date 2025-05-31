import RegionFilter from "../components/RegionFilter"
import { SearchInput } from "../components/SearchInput"

export const MainPage = () => {
  return (
      <>
        <div className="w-full md:flex-1 md:max-w-md mb-500 md:mb-0">
          <SearchInput />
        </div>         
        <div className="w-1/2 md:w-80 md:ml-auto lg:w-96">
          <RegionFilter />
        </div>
      </>
  )
}