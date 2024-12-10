import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Bookings from "../pages/Bookings/Bookings";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/bookings/:id",
        loader: () => fetch("/spots.json"),
        element: <Bookings />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
