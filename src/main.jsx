import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import ErrorPage from "./ErrorPage.jsx";
import Products from "./components/Products.jsx";
import Product from "./components/Product";
import AllProducts from "./components/AllProducts.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/shop-products",
    element: <AllProducts />,
    children: [
      {
        path: "/shop-products",
        element: <Products />
      },
      {
        path: "shop-products/all",
        element: <Products />
      },
      {
        path: "shop-products/wood",
        element: <Products />,
      },
      {
        path: "shop-products/lighting",
        element: <Products />,
      },
      {
        path: "shop-products/appliances",
        element: <Products />,
      },
      {
        path: "shop-products/landscaping",
        element: <Products />,
      },
      {
        path: "shop-products/paint",
        element: <Products />,
      },
    ],
  },
  {
    path: "shop-products/wood/:woodId",
    element: <Product />,
  },
  {
    path: "shop-products/lighting/:lightingId",
    element: <Product />,
  },
  {
    path: "shop-products/appliances/:appliancesId",
    element: <Product />,
  },
  {
    path: "shop-products/landscaping/:landscapingId",
    element: <Product />,
  },
  {
    path: "shop-products/paint/:paintId",
    element: <Product />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
