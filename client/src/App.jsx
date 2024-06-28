import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import { HomePage, RestaurantDetailPage, UpdateRestaurantPage } from "./pages";

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
  return <RouterProvider router={router} />;
}
