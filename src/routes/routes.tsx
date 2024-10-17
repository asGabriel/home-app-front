import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FinancePage from "../pages/finance";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/finance",
    element: <FinancePage />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
