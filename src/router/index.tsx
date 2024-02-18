import { useRoutes } from "react-router-dom";
import Deals from "../pages/Deals";
import Firms from "../pages/Firms";
import Professionals from "../pages/Professionals";
import ErrorPage from "../pages/ErrorPage";

import Layout from "../layout";

function Router() {
  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Deals />,
        },
        {
          path: "/Firms",
          element: <Firms />,
        },
        {
          path: "/Professionals",
          element: <Professionals />,
        },
      ],
    },

    {
      path: "/error-page",
      element: <ErrorPage />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ];

  return useRoutes(routes);
}

export default Router;
