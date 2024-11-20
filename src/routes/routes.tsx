import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FinancePage from "../pages/finance";
import LoginPage from "../pages/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/finance",
    element: <FinancePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
