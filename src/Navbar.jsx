import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "normalize.css";
// import lipstick_bg from './Images/lipstick_bg.jpg'
import Logo from "/static/images/Logo.png";
import "./App.css";

function Navbar() {
  return (
    <div className=" bg-[#262425] h-20 flex justify-between">
      <div className=" p-2 w-32 ml-10">
        <a href="/">
          <img src={Logo} alt="" className=" h-14 w-32" />
        </a>
      </div>
      <div className="min-h-[60vh] left-0 items-center ">
        <div className=" p-5 space-x-6 flex md:flex md:flex-grow flex-row justify-end text-[#E0CCBE] mr-12">
          <a href="/">Home</a>
          <a href="/aboutUs">About Us</a>
          <a href="/shop">Shop</a>
          <a href="/vibeCheck">Vibe Check</a>
          <a href="/contactUs">Contact Us</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
