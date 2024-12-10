import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Blog from "../pages/Blog/Blog";
import Bookings from "../pages/Bookings/Bookings";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import News from "../pages/News/News";
import Places from "../pages/Places/Places";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

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
        path: "/Places/:id",
        loader: () => fetch("/spots.json"),
        element: <Places />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/blog",
        element: (
          <PrivateRoute>
            <Blog />
          </PrivateRoute>
        ),
      },
      {
        path: "/news",
        element: (
          <PrivateRoute>
            <News />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
