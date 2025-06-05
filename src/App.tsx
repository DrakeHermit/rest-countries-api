import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { MainLayout } from "./components/MainLayout";
import { CountryPage } from "./pages/CountryPage";
import { MainPage } from "./pages/MainPage";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { allCountriesLoader, countryLoader } from "./lib/loaders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    loader: allCountriesLoader,
    hydrateFallbackElement: <div>Loading countries...</div>,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "country/:countryName",
        element: <CountryPage />,
        loader: countryLoader,
        hydrateFallbackElement: <div>Loading country...</div>,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
