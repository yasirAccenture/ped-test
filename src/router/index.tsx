import { Route, Routes, useRoutes } from "react-router-dom";
import Deals from "../pages/Deals";
import Firms from "../pages/Firms";
import Professionals from "../pages/Professionals";
import ErrorPage from "../pages/ErrorPage";

import Layout from "../layout";
import { MsalProvider, MsalAuthenticationTemplate } from "@azure/msal-react";
import { InteractionType } from "@azure/msal-browser";
import type { IPublicClientApplication } from "@azure/msal-browser";

// const AuthenticatedRoutes = () => {
//   const routes = [
//     {
//       path: "/",
//       element: <Layout />,
//       children: [
//         {
//           path: "/",
//           element: <Deals />,
//         },
//         {
//           path: "/Firms",
//           element: <Firms />,
//         },
//         {
//           path: "/Professionals",
//           element: <Professionals />,
//         },
//       ],
//     },
//   ];

//   return useRoutes(routes);
// }


const Router = () => {
  // Define your authentication request
  const authRequest = {
    scopes: ['openid', 'profile', 'User.Read'],
  }

  return (
    <MsalAuthenticationTemplate
      interactionType={InteractionType.Redirect}
      authenticationRequest={authRequest}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Deals />} />
          <Route path="Firms" element={<Firms />} />
          <Route path="Professionals" element={<Professionals />} />
        </Route>
        {/* Render non-authenticated routes */}
        <Route path="/error-page" element={<ErrorPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </MsalAuthenticationTemplate>
  )
}

export default Router;
