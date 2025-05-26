import { RouterProvider, createBrowserRouter } from "react-router-dom"

import { MainLayout } from "./components/MainLayout"
import { CountryPage } from "./pages/CountryPage"
import { MainPage } from "./pages/MainPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{
      index: true,
      element: <MainPage />
    },
    {
      path: "country/:countryName",
      element: <CountryPage />  
    }
  ]
  }
])

function App() {

  return <RouterProvider router={router} />
}

export default App
