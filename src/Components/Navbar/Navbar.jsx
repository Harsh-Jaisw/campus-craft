import React from "react";
import { Link } from "react-router-dom";
import ToggleThemeBtn from "../ToggleThemeBtn/ToggleThemeBtn";

function Navbar() {
const myTheme = document.getElementById("main");
const toggleTheme = () => {
  const currentTheme = myTheme.getAttribute("data-theme");
  const newTheme = currentTheme === "cupcake" ? "dark" : "cupcake";
  myTheme.setAttribute("data-theme", newTheme);
};



  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/aboutus">AboutUs</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn text-xl">
          Campus Craft
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aboutus">AboutUs</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/contactus" className="btn">
          ContactUs
        </Link>
        {/* <button onClick={} id="themeToggleBtn">Theme</button> */}
      <ToggleThemeBtn onChange={()=>toggleTheme()}/>


      </div>
    </div>
  );
}

export default Navbar;
