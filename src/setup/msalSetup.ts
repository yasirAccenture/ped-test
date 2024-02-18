import {
    PublicClientApplication,
    EventType,
    AuthenticationResult,
} from "@azure/msal-browser";
import type { IPublicClientApplication } from "@azure/msal-browser";

import { LogLevel } from "@azure/msal-browser";

const msalConfig = {
    auth: {
        clientId: '1125682a-174a-46bb-8748-bf6163645e86', // This is the ONLY mandatory field that you need to supply.
        authority: 'https://suttonplace.ciamlogin.com/', // Replace the placeholder with your tenant subdomain
        redirectUri: '/', // You must register this URI on Azure Portal/App Registration. Defaults to window.location.origin
        postLogoutRedirectUri: '/', // Indicates the page to navigate after logout.
    },
    cache: {
        cacheLocation: 'localStorage', // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {
        loggerOptions: {
            loggerCallback: (level: LogLevel, message: string, containsPii: boolean) => {
                if (containsPii) {
                    return;
                }
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                    default:
                        return;
                }
            },
        },
    },
};

const protectedResources = {
    pedAPI: {
        endpoint: process.env.NODE_ENV == 'development' ? 'https://localhost:7074' : 'https://test-ped4.azurewebsites.net/',
        scopes: {
            read: ['api://316a3d65-6645-4aeb-9c34-b2baaa07e9cf/PED.Read'],
            write: ['api://316a3d65-6645-4aeb-9c34-b2baaa07e9cf/PED.ReadWrite'],
        },
    },
};

export const loginRequest = {
    scopes: [...protectedResources.pedAPI.scopes.read, ...protectedResources.pedAPI.scopes.write],
};


const msalSetup = (): IPublicClientApplication => {
    const msalInstance = new PublicClientApplication(msalConfig);

    if (
        !msalInstance.getActiveAccount() &&
        msalInstance.getAllAccounts().length > 0
    ) {
        msalInstance.setActiveAccount(msalInstance.getAllAccounts()[0]);
    }

    msalInstance.enableAccountStorageEvents();

    msalInstance.addEventCallback((event) => {
        if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
            const payload = event.payload as AuthenticationResult;
            const account = payload.account;
            msalInstance.setActiveAccount(account);
        }
    });
    return msalInstance;
};

export default msalSetup;
