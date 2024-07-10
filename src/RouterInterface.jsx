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
import VerifyOTP from "./pages/login/VerifyOTP";

const RouterInterface = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<App />} />
          <Route path="/shop" element={<PrivateRoute Component={Shop} />} />
          <Route path="/aboutUs" element={<Aboutus />} />
          <Route path="/VibeCheck" element={<VibeCheck />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/new" element={<PrivateRoute Component={NewPage} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/verifyOTP" element={<PrivateRoute Component={VerifyOTP} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RouterInterface;
