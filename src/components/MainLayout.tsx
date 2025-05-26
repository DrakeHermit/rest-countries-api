import { Outlet } from "react-router"
import { NavBar } from "./NavBar"

export const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}