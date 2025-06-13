import { useTheme } from "../context/themeContext";

export const NavBar = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav className="flex justify-between font-sans items-center bg-white dark:bg-blue-900 py-400 lg:py-300 md:px-500 px-200 shadow-md sticky top-0 z-50">
      <div className="lg:max-w-[1272px] mx-auto flex justify-between items-center w-full">
        <header className="text-gray-950 dark:text-white text-sm font-extrabold">
          <h1 className="lg:text-2xl">Where in the world?</h1>
        </header>
        <button
          className="flex items-center dark:text-white text-gray-900 gap-2 text-xs lg:text-base cursor-pointer"
          onClick={toggleTheme}
        >
          <img
            src={
              isDarkMode
                ? "/src/assets/light-mode-toggle.svg"
                : "/src/assets/dark-mode-toggle.svg"
            }
            className="w-5 h-5"
            alt="Icon to change the theme"
          />{" "}
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
};
