import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const {cart}=useSelector((state)=>state);
  return (
    <div>
      <NavLink to="/">
        <div>
          <img
            src="https://img.freepik.com/free-vector/gradient-code-logo-with-tagline_23-2148811020.jpg"
            className="nav-img"
          />
        </div>
      </NavLink>
      <div>
        <NavLink to="/">
          <p>Home</p>
        </NavLink>
        <NavLink to="/cart">
          <FaShoppingCart />
          <div>
            {
              cart.length > 0 ?
              (cart.length):(<p></p>)
              
            }
          </div>
        </NavLink>
      </div>
    </div>
  );
}
