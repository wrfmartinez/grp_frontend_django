import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Products from './components/Products.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/wood", element: <Products /> },
  { path: "/lighting", element: <Products /> },
  { path: "/appliances", element: <Products /> },
  { path: "/landscaping", element: <Products /> },
  { path: "/paint", element: <Products /> }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
      <App />
    <App />
  </React.StrictMode>,
)
