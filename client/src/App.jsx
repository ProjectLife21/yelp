import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import { HomePage, RestaurantDetailPage, UpdateRestaurantPage } from "./pages";

// App Context
import { RestaurantContextProvider } from "./context/appContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/restaurants/:id",
    element: <RestaurantDetailPage />,
  },
  {
    path: "/restaurants/:id/update",
    element: <UpdateRestaurantPage />,
  },
]);

export default function App() {
  return (
    <RestaurantContextProvider>
      <RouterProvider router={router} />
    </RestaurantContextProvider>
  );
}
