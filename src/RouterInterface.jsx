import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import App from "./App";
import Shop from "./pages/shop/Shop";
import Aboutus from "./pages/aboutUs/Aboutus";
import VibeCheck from "./pages/vibeCheck/VibeCheck";
import ContactUs from "./pages/contactUs/ContactUs";
import Login from "./pages/login/Login";
import SignUp from "./pages/login/SignUp";
import { PrivateRoute } from "./auth/PrivateRoute";
import NewPage from "./pages/NewPage";

const RouterInterface = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<PrivateRoute Component={App} />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/aboutUs" element={<Aboutus />} />
          <Route path="/VibeCheck" element={<VibeCheck />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/new" element={<PrivateRoute Component={NewPage} />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RouterInterface;
