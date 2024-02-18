import { Route, Routes, useRoutes } from "react-router-dom";
import Deals from "../pages/Deals";
import Firms from "../pages/Firms";
import Professionals from "../pages/Professionals";
import ErrorPage from "../pages/ErrorPage";

import Layout from "../layout";
import { MsalAuthenticationTemplate } from "@azure/msal-react";
import { InteractionType } from "@azure/msal-browser";
import { loginRequest } from '../setup/msalSetup';
import { useMsal } from '@azure/msal-react';
import { useEffect } from "react";
import { redirect } from "react-router-dom";
import Login from "@/pages/Login";


const Router = () => {
  const authRequest = {
    ...loginRequest,
  };

  const { instance } = useMsal()
  const activeAccount = instance.getActiveAccount()
  console.log(activeAccount)
  if (activeAccount) {
    redirect("/login");
  }

  return (
    <>

      {!activeAccount &&
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/error-page" element={<ErrorPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      }

      {activeAccount && <MsalAuthenticationTemplate
        interactionType={InteractionType.Redirect}
        authenticationRequest={authRequest}
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Deals />} />
            <Route path="Firms" element={<Firms />} />
            <Route path="Professionals" element={<Professionals />} />
          </Route>

          <Route path="/error-page" element={<ErrorPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </MsalAuthenticationTemplate>}

    </>

  )
}

export default Router;
