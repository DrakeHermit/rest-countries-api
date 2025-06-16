import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { MainLayout } from "./components/MainLayout";
import { CountryPage } from "./pages/CountryPage";
import { MainPage } from "./pages/MainPage";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { allCountriesLoader, countryLoader } from "./lib/loaders";
import { ThemeProvider } from "./context/themeContext";
import { ErrorPage } from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    loader: allCountriesLoader,
    hydrateFallbackElement: <div>Loading countries...</div>,
    errorElement: <div>Error loading countries data.</div>,
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
        errorElement: <div>Error loading country data.</div>,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
