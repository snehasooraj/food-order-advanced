import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Account from "./components/SigninSignup.jsx";
import AdminPanel from "./admin/AdminPanel.jsx";
import Orders from "./pages/Orders.jsx";
import ShipAddressForm from "./components/ShipAddressForm.jsx";
import Ordertrack from "./components/Ordertrack.jsx";


const router = createBrowserRouter([
  {
path: "/",
element:<App />,
children:[
 
     { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },
      { path: "account", element: <Account /> },
      { path: "admin", element: <AdminPanel /> },
      { path: "orders", element: <Orders /> },
       { path: "shipaddress", element:  <ShipAddressForm /> },
       { path: "ordertrack", element:  <Ordertrack /> },

],



  },
])


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
