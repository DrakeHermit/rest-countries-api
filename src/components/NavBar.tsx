export const NavBar = () => {
  return (
    <nav className="flex justify-between items-center bg-white dark:bg-dark-blue dark:text-white p-4 shadow-md mb-4">
      <header className="text-blue-800">Where in the world?</header>
      <div><img src="/src/assets/dark-mode-toggle.svg" alt="Icon to change the theme" /></div>
    </nav>
  )
}