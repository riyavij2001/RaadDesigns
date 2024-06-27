import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "normalize.css";
// import lipstick_bg from './Images/lipstick_bg.jpg'
import Logo from "/static/images/Logo.png";
import "./App.css";

function Navbar() {
  return (
    <div>
      <div className="navbar bg-[#262425]">
        <a href="/">
          <img src={Logo} alt="" className=" md:h-14 md:w-36 h-14 w-36 pl-8" />
        </a>
        <div className=" flex-1 justify-end items-end">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 scale-x-[-1]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#E0CCBE"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <div className=" pr-20">
              <ul
                tabIndex={0}
                className="menu menu-md dropdown-content bg-[#E0CCBE] text-[#262425] rounded-box z-[1] mt-3 w-32 p-2 shadow"
              >
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/aboutUs">About Us</a>
                </li>
                <li>
                  <a href="/shop">Shop</a>
                </li>
                <li>
                  <a href="/vibeCheck">Vibe Check</a>
                </li>
                <li>
                  <a href="/contactUs">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="navbar-end hidden md:flex md:text-[#E0CCBE] w-[70vw]">
          <ul className="menu menu-horizontal">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/aboutUs">About Us</a>
            </li>
            <li>
              <a href="/shop">Shop</a>
            </li>
            <li>
              <a href="/vibeCheck">Vibe Check</a>
            </li>
            <li>
              <a href="/contactUs">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className=" bg-[#262425] h-20 flex justify-between">
        <div className=" p-2 w-32 ml-10">
          <a href="/">
            <img src={Logo} alt="" className=" h-14 w-32" />
          </a>
        </div>

        <div className="min-h-[60vh] left-0 items-center ">
          <div className=" p-5 space-x-6 flex md:flex md:flex-grow flex-row justify-end text-[#E0CCBE] mr-12 sm:text-black md:text-white">
            <a href="/">Home</a>
            <a href="/aboutUs">About Us</a>
            <a href="/shop">Shop</a>
            <a href="/vibeCheck">Vibe Check</a>
            <a href="/contactUs">Contact Us</a>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Navbar;
