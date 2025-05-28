import RegionFilter  from "../components/RegionFilter"
import { SearchInput } from "../components/SearchInput"

export const MainPage = () => {
  return (
    <main className="dark:text-white text-gray-950 dark:bg-blue-950 px-200 py-300 md:p-500 lg:px-1000  min-h-screen">
      <div className="md:flex lg:justify-between md:gap-4">
        <SearchInput />
        <RegionFilter />
      </div>
    </main>
  )
}