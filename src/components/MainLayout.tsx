import { Outlet } from "react-router";
import { NavBar } from "./NavBar";
import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchAllCountries } from "../lib/api";

export const MainLayout = () => {
  const { data: countries } = useSuspenseQuery({
    queryKey: ["countries", "all"],
    queryFn: fetchAllCountries,
  });

  return (
    <div>
      <NavBar />
      <main className="dark:text-white text-gray-950 dark:bg-blue-950 bg-gray-50 min-h-screen">
        <Outlet context={{ countries }} />
      </main>
    </div>
  );
};
