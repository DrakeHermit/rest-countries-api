import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { MainLayout } from "./components/MainLayout";
import { CountryPage } from "./pages/CountryPage";
import { MainPage } from "./pages/MainPage";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";

const allCountriesLoader = async () => {
  await queryClient.prefetchQuery({
    queryKey: ["countries"],
    queryFn: async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    loader: allCountriesLoader,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "country/:countryName",
        element: <CountryPage />,
      },
    ],
  },
]);

console.log(allCountriesLoader);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
