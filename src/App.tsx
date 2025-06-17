import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { MainLayout } from "./components/MainLayout";
import { CountryPage } from "./pages/CountryPage";
import { MainPage } from "./pages/MainPage";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { allCountriesLoader, countryLoader } from "./lib/loaders";
import { ThemeProvider } from "./context/themeContext";
import { ErrorPage } from "./pages/ErrorPage";
import { LoadingSpinner } from "./components/LoadingSpinner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    loader: allCountriesLoader,
    hydrateFallbackElement: <LoadingSpinner message="Loading countries..." />,
    errorElement: <ErrorPage message="Failed to load countries" />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "country/:countryName",
        element: <CountryPage />,
        loader: countryLoader,
        hydrateFallbackElement: (
          <LoadingSpinner message="Loading country data..." />
        ),
        errorElement: (
          <ErrorPage
            title="This country doesn't exist in our database"
            message="Failed to load country data"
          />
        ),
      },
      {
        path: "*",
        element: (
          <ErrorPage
            title="Page Not Found"
            message="The page you're looking for doesn't exist"
          />
        ),
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
