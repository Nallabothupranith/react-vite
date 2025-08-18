import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Student from "./Pages/Students";
import AdminLayout from "./Layout/AdminLayout";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";

const router1 = createBrowserRouter([
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/students",
        element: <Student />,
      },
      {
        path: "/login",
        element: <Login type="login" />,
      },
      {
        path: "/Dashboard",
        element: <Dashboard />,
      },
      {
        path: "/Register",
        element: <Register type="register" />,
      },
      {
        path: "/Profile",
        element: <Profile />,
      },
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={router1} />;
};

export { router1 };
