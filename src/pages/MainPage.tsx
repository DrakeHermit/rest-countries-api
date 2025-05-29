import RegionFilter from "../components/RegionFilter"
import { SearchInput } from "../components/SearchInput"

export const MainPage = () => {
  return (
    <main className="dark:text-white text-gray-950 dark:bg-blue-950 bg-gray-50 min-h-screen">
      
        
      <div className="flex flex-col py-500 px-5 gap-2 mb-8 md:flex-row md:justify-between md:items-center md:px-500 lg:px-1000">
          
          {/* Search Input */}
          <div className="w-full md:flex-1 md:max-w-md mb-500 md:mb-0">
            <SearchInput />
          </div> 
          
          {/* Region Filter - Half width on mobile, fixed width on larger screens */}
          <div className="w-1/2 md:w-80 md:ml-auto lg:w-96">
            <RegionFilter />
          </div>
          
        </div>


        {/* Countries Grid - Add your countries here */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Your country cards will go here */}
        </div>

      
    </main>
  )
}