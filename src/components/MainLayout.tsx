import { Outlet } from "react-router"
import { NavBar } from "./NavBar"

export const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <main className="dark:text-white text-gray-950 dark:bg-blue-950 bg-gray-50 min-h-screen">
        <div className="flex flex-col py-300 px-200 gap-2 mb-400 md:flex-row md:justify-between md:items-center md:px-500 lg:px-1000">
          <Outlet />
        </div>
      </main>
    </div>
  )
}