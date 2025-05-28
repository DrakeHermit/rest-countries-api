export const NavBar = () => {
  return (
    <nav className="flex justify-between font-sans items-center bg-white dark:bg-blue-900 py-400 md:px-500 px-200 lg:px-1000 shadow-md ">
      <header className="text-gray-950 dark:text-white text-sm font-extrabold">Where in the world?</header>
      <button className="flex items-center dark:text-white text-gray-900 gap-2 text-xs cursor-pointer" ><img src="/src/assets/light-mode-toggle.svg" className="w-4 h-4" alt="Icon to change the theme" /> Dark Mode</button>
    </nav>
  )
}