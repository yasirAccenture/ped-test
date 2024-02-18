import ScrollToTop from "@/components/Base/ScrollToTop";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./stores/store";
import Router from "./router";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Router />
            </Provider>
            <ScrollToTop />
        </BrowserRouter>
    )
}

export default App