import React from "react";
import "./css/Navbar.css";
import Cart from "./cart";
export default function Navbar() {
  return (
    <nav>
      <button className="openLeft" type="button">
        ☰
      </button>
      <div id="heading">
        <p>
          Comfy<span>House</span>
        </p>
      </div>
        <i>
          <p id="cart_items">0</p>
        </i>
        <button className="Cart">
          <Cart/>
          My Cart
        </button>
    </nav>
  );
}
