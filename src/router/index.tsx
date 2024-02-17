import { useRoutes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Inbox from "../pages/Inbox";
import ErrorPage from "../pages/ErrorPage";

import Layout from "../themes";

function Router() {
  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "inbox",
          element: <Inbox />,
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
