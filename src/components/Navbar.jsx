import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const {cart}=useSelector((state)=>state);
  return (
    <div>
    <nav className="flex justify-around h-10 items-center max-w-6xl mx-auto">
      <NavLink to="/">
        <div className="ml-5">
          <img
            src="https://img.freepik.com/free-vector/gradient-code-logo-with-tagline_23-2148811020.jpg"
            className="nav-img"
          />
        </div>
      </NavLink>
      <div className="flex justify-between items-center font-medium text-slate-100 mr-5 space-x-6 ">
        <NavLink to="/">
          <p>Home</p>
        </NavLink>
        <NavLink to="/cart">
          <div className="relative">
          {
              cart.length > 0 &&
              (<span
              className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white"
              >{cart.length}</span>)

          }
          <FaShoppingCart  className="text-2xl"/>
          </div>
        </NavLink>
      </div>
    </nav>
    </div>

  );
}
