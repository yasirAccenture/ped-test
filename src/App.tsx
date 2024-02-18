import ScrollToTop from "@/components/Base/ScrollToTop";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./stores/store";
import Router from "./router";
import { MsalProvider, MsalAuthenticationTemplate } from "@azure/msal-react";
import msalSetup, { loginRequest } from "./setup/msalSetup";

const App: React.FC = () => {
    const msalInstance = msalSetup();
    const authRequest = {
        ...loginRequest,
    }

    return (
        <BrowserRouter>
            <Provider store={store}>
                <MsalProvider instance={msalInstance}>
                    <Router />
                </MsalProvider>
            </Provider>
            <ScrollToTop />
        </BrowserRouter>
    )
}

export default App