import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Components/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import MealByCategory from "./Components/MealByCategroy/MealByCategory";
import MealsContextProvider, { MealsContext } from "./Contexts/MealsContext";
import MealDetails from "./Components/MealDetails/MealDetails";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "category/:cat", element: <MealByCategory /> },
        { path: "/mealdetails/:mealId", element: <MealDetails /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return (
    <>
      <MealsContextProvider>
        <RouterProvider router={routes}></RouterProvider>
      </MealsContextProvider>
    </>
  );
}

export default App;
