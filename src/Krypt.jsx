window.global ||= window;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./pages/layout/Layout";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Product from "./pages/products/Product";
import Successful from "./pages/mint/Successful";
import Products from "./pages/products/Products";
import Order from "./components/Order";
import Billing from "./components/Billing.jsx";
import AdminPage from "./pages/Admin/AdminPage";
import Auth from "./pages/auth/Auth";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

function Krypt() {
  return (
    <>
      <React.Fragment>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/products" element={<Products />} />
              <Route path="/order" element={<Order />} />
              <Route path="/billing" element={<Billing />} />
              <Route path="/:id" element={<Product />} />
              <Route path="/order-successful" element={<Successful />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/auth" element={<Auth />}>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </React.Fragment>

      <div>
        <ToastContainer position="bottom-right" />
      </div>
    </>
  );
}

export default Krypt;
