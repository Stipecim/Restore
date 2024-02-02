import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import Catalog from "../../features/catalog/Catalog";
import ProductDetails from "../../features/catalog/ProductDetails";
import ContactPage from "../../features/contact/ContactPage";
import AboutPage from "../../features/about/AboutPage";
import ServerError from "../errors/ServerError";
import NotFound from "../errors/NotFound";

export const router = createBrowserRouter (([
    {
        path: '/',
        element: <App />,
        children: [
            {
                //authenticated routes
                element: "RequireAuth" // implementation later
            },
            {
                //admin routes
                element: "RequireAuth" // implementation later
            },
            {path: 'catalog', element: <Catalog />},
            {path: 'catalog/:id', element: <ProductDetails />},
            {path: 'about', element: <AboutPage/>},
            {path: 'contact', element: <ContactPage />},
            {path: '/server-error', element: <ServerError />},
            {path: '/not-found', element: <NotFound />}
            
        ]
    }
]))