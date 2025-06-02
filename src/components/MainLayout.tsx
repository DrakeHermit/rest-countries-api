import { Outlet } from "react-router"
import { NavBar } from "./NavBar"

export const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <main className="dark:text-white text-gray-950 dark:bg-blue-950 bg-gray-50 min-h-screen">
        
          <Outlet />
        
      </main>
    </div>
  )
}