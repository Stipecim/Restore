import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import Catalog from "../../features/catalog/Catalog";
import ProductDetails from "../../features/catalog/ProductDetails";
import ContactPage from "../../features/contact/ContactPage";
import AboutPage from "../../features/about/AboutPage";
import ServerError from "../errors/ServerError";
import NotFound from "../errors/NotFound";
import BasketPage from "../../features/baskets/BasketPage";
import Register from "../../features/account/Register";
import Login from "../../features/account/Login";
import RequireAuth from "./RequireAuth";
import Orders from "../../features/orders/Orders";
import CheckoutWrapper from "../../features/Checkout/CheckoutWrapper";

export const router = createBrowserRouter(([
  {
    path: "/",
    element: <App />,
    children: [
      {
        //authenticated routes
        element: <RequireAuth />, children: [
          { path: "checkout", element: <CheckoutWrapper /> },
          { path: "orders", element: <Orders/> }
        ], 
      },
      {
        //admin routes
        element: "RequireAuth", // implementation later
      },
      
      { path: "catalog", element: <Catalog /> },
      { path: "catalog/:id", element: <ProductDetails /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      
      { path: "basket", element: <BasketPage /> },
      { path: "server-error", element: <ServerError /> },
      { path: "not-found", element: <NotFound /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
    ],
  },
]));
